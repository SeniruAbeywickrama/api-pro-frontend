// src/pages/Documentation.js (or src/components/Home.js)

import React from "react";

function Documentation() {
    return (
        <div className="pt-24 px-4 md:px-10 bg-gray-50 min-h-screen">
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                API PRO Developer Documentation
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar Navigation */}
                <aside className="md:col-span-1 bg-white p-6 rounded-lg shadow">
                    {/* Getting Started */}
                    <div className="mb-6">
                        <h2 className="text-xs text-gray-500 font-semibold mb-2">GETTING STARTED</h2>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline"
                                >
                                    Authentication
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Core Resources */}
                    <div>
                        <h2 className="text-xs text-gray-500 font-semibold mb-2">CORE RESOURCES</h2>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-blue-700 font-semibold bg-blue-100 rounded px-2 py-1 block">
                                    GET /users
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    POST /users
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    GET /analytics
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700 hover:text-blue-600">
                                    GET /logs
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="md:col-span-3 bg-white p-8 rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">GET /v1/users</h2>
                    <p className="text-gray-700 mb-6">
                        Retrieves a list of all users associated with your project.
                    </p>

                    <h3 className="text-lg font-semibold mb-2">Example Request</h3>
                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
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
                    <br/>
                    <h3 className="text-lg font-semibold mb-2"> Example Response (200 OK) </h3>

                    <pre className="bg-gray-900 text-green-200 text-sm p-4 rounded overflow-x-auto">
<code>
{`{
"data" : {
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
}`}
</code>
          </pre>
                </main>
            </div>
        </div>
    );
}

export default Documentation;
