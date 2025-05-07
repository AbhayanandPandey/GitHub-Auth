import React from 'react'

export default function Dashboard() {
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
                            src="https://via.placeholder.com/150" // Replace with actual image URL
                            alt="Profile"
                            className="w-24 h-24 rounded-full shadow-md"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800"></h2>
                            <p className="text-gray-500"></p>
                        </div>
                    </div>

                    <button
                        className="mt-6 w-full py-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
                    >
                        Log Out
                    </button>
                </section>
            </main>
        </div>
    </div>
  )
}

