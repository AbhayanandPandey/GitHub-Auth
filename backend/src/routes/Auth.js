const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const axios = require('axios');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
const {logoutUser} = require('../controllers/Auth.controller.js');

router.get('/github', (req, res) => {
    const params = new URLSearchParams({
      client_id: process.env.GITHUB_CLIENT_ID,
      scope: 'user:email',
      prompt: 'consent',
    });
  
    res.redirect(`https://github.com/login/oauth/authorize?${params.toString()}`);
  });

router.get('/github/callback', async (req, res) => {
  const code = req.query.code;

  try {
    const tokenRes = await axios.post(
      `https://github.com/login/oauth/access_token`,
      {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      {
        headers: { Accept: 'application/json' },
      }
    );

    const accessToken = tokenRes.data.access_token;

    const userRes = await axios.get('https://api.github.com/user', {
      headers: { Authorization: `token ${accessToken}` },
    });

    const emailRes = await axios.get('https://api.github.com/user/emails', {
      headers: { Authorization: `token ${accessToken}` },
    });

    const primaryEmail = emailRes.data.find(email => email.primary).email;

    const userData = {
      name: userRes.data.name,
      email: primaryEmail,
      avatar_url: userRes.data.avatar_url,
    };

    const jwtToken = jwt.sign(userData, 
    process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('GithubToken', jwtToken, {
        httpOnly: false,  
        secure: false, 
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });

    const query = new URLSearchParams(userData).toString();

    res.redirect(`http://localhost:5173/dashboard?${query}`);
  } catch (error) {
    res.send('Authentication failed.');
  }
})
router.get('/logout', logoutUser);

module.exports = router;