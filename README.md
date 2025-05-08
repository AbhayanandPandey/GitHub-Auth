# 🔐 GitHub OAuth Authentication with MERN Stack

This project demonstrates how to implement GitHub OAuth login using the MERN (MongoDB, Express, React, Node.js) stack. After authenticating via GitHub, the user is redirected to a dashboard that displays their GitHub profile data including **name**, **email**, and **profile picture**.


---

## 🚀 Features

- GitHub OAuth login using OAuth2
- User redirected to dashboard on successful login
- JWT token stored in cookies (`GithubToken`)
- User info shown on dashboard: name, email, and profile picture
- Logout clears token

---

## 🧰 Technologies Used

- **Frontend**: React, Vite, Axios, React Router
- **Backend**: Node.js, Express, JWT, Axios, dotenv, cookie-parser
- **Authentication**: GitHub OAuth

---

## 🔐 GitHub OAuth App Setup

1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click **"New OAuth App"**
3. Fill in:
   - **Application Name**: Your App Name
   - **Homepage URL**: `http://localhost:5173`
   - **Authorization Callback URL**: `http://localhost:5000/auth/github/callback`
4. Save and copy the **Client ID** and **Client Secret**

---

## ⚙️ Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   npm install
   GITHUB_CLIENT_ID=your_client_id
   GITHUB_CLIENT_SECRET=your_client_secret
   JWT_SECRET=your_jwt_secret
   PORT=5000
   ```
---

## ⚙️ Frontend Setup

```bash
  cd frontend
  npm i
  npm run dev
```



