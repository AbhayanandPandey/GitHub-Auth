import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Dashboard() {
    const handleLogout = () => {
        window.location.href = "http://localhost:5001/auth/logout";
    }

    const [searchParams] = useSearchParams();

  const name = searchParams.get('name');
  const email = searchParams.get('email');
  const avatar_url = searchParams.get('avatar_url');
  return (
    <div>
      <div className="flex min-h-screen bg-gray-100">
            <main className="flex-1 p-10">
                <header className="mb-8 text-center">
                    <h1 className="text-3xl font-semibold text-gray-800">User Profile</h1>
                </header>

                <section className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto">
                    <div className="flex items-center space-x-6">
                        <img
                            src= {avatar_url}
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">
                                {name}
                            </h2>
                            <p className="text-gray-500">
                                {email}
                            </p>
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                        onClick={handleLogout}
                    >
                        Log Out
                    </button>
                </section>
            </main>
        </div>
    </div>
  )
}

