import React from "react";

export default function NOTFound(){
    return <div>
            <div className="flex flex-col items-center justify-center h-72 bg-gray-100 p-6 mt-5 ">
      <div className="text-center">
        <span className="text-4xl mb-4">🔍</span>
        <h2 className="text-xl font-semibold mb-2">No Results Found</h2>
        <p className="text-gray-600">Sorry, we couldn't find anything matching your search.</p>
        <span className="text-2xl mt-4">😔</span>
      </div>
    </div>
    </div>
}