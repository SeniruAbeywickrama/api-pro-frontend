import React from "react";

const RightSection = () => {
    return (
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
    );
};

export default RightSection;
