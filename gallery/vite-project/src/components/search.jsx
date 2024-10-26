import React, { useState } from "react";

export default function Search({searchText}){
    const[text, setText]=useState('');

    function onsubmit(e){
        e.preventDefault();
        searchText(text)
    }
    return <div>
          <form onSubmit={onsubmit} className="flex items-center max-w-md mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
      <input
      onChange={e=>setText(e.target.value)}
        type="text"
        placeholder="Search..."
        className="flex-grow px-4 py-2 border-none rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
    </div>
}