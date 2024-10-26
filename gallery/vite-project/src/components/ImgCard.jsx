import React from "react";

export default function({images}){
    const tags= images.tags.split(",");

    return <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img src={images.webformatURL} alt="" className="w-96 h-72" />
    <div className="px-6 py-4">
        <div className="text-purple-400 font-bold font-xl" >
            photo by {images.user}
        </div>
        <ul>
            <li>
                <strong>Views:</strong> {images.views}
            </li>
            <li>
                <strong>Likes:</strong> {images.likes}
            </li>
            <li>
                <strong>Downloads:</strong>{images.downloads}
            </li>
        </ul>
        <div className="px-6 py-4">

            {
                tags.map((tag, index)=>(
                  
                    <span className="bg-gray-200 rounded-full px-2 mt-2 py-1 mr-2 inline-block font-xs" key={index}>#{tag}</span>

                ))
            }
        </div> 
    </div>

    </div>
}