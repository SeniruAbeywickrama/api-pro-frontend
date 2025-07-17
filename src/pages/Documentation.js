// src/pages/Documentation.js (or src/components/Home.js)

import React from "react";

function Documentation() {
  return (
    <div className="pt-24 px-4 md:px-10 min-h-screen bg-gradient-to-br from-violet-100 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600/5 to-blue-600/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-violet-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="relative z-10">
        {/* Main Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
          API PRO Developer Documentation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
            {/* Getting Started */}
            <div className="mb-6">
              <h2 className="text-xs text-gray-500 font-semibold mb-2 tracking-widest">GETTING STARTED</h2>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-blue-600 hover:underline font-medium transition-colors duration-200"
                  >
                    Authentication
                  </a>
                </li>
              </ul>
            </div>

            {/* Core Resources */}
            <div>
              <h2 className="text-xs text-gray-500 font-semibold mb-2 tracking-widest">CORE RESOURCES</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-700 font-semibold bg-blue-100 rounded px-2 py-1 block shadow-sm">
                    GET /users
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    POST /users
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    GET /analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                    GET /logs
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="md:col-span-3 bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg border border-white/20">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent">
              GET /v1/users
            </h2>
            <p className="text-gray-700 mb-6 text-lg">
              Retrieves a list of all users associated with your project.
            </p>

            <h3 className="text-lg font-semibold mb-2 text-blue-700">Example Request</h3>
            <pre className="bg-gray-900/90 text-green-200 text-sm p-4 rounded-xl overflow-x-auto shadow-inner border border-gray-800 mb-6">
<code>
{`fetch('https://api.apipro.com/v1/users', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}
</code>
            </pre>

            <h3 className="text-lg font-semibold mb-2 text-blue-700">Example Response (200 OK)</h3>
            <pre className="bg-gray-900/90 text-green-200 text-sm p-4 rounded-xl overflow-x-auto shadow-inner border border-gray-800">
<code>
{`{
  "data" : [
    {
      "id" : "user_123",
      "name" : "Alex Smith",
      "email" : "alex.smith@example.com",
      "created_at" : "2025-07-16T11:30:00Z"
    },
    {
      "id" : "user_124",
      "name" : "Maria Garcia",
      "email" : "maria.garcia@example.com",
      "created_at" : "2025-07-16T11:30:00Z"
    }
  ]
}`}
</code>
            </pre>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Documentation;
