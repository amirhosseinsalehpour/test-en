"use client";

import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("");

  const handleRedirect = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          لینک خود را وارد کنید
        </h1>
        <input
          type="text"
          placeholder="مثال: https://example.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 mb-4"
        />
        <button
          onClick={handleRedirect}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition duration-300"
        >
          برو به لینک
        </button>
      </div>
    </div>
  );
}
