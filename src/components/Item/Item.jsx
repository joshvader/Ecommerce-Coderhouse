import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({ item }) => {
    return (
        <div>
    <div className="rounded-lg overflow-hidden shadow-lg">
      <img className="w-full" src={item.pictureUrl}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Casual Skiners</div>
        <p className="text-gray-700 text-base">
          {item.title}
        </p>
      </div>
      <div className="px-6 py-4">
      <Link to={`/item/${item.id}`}>
      <button className="w-full justify-center py-2 px-4  bg-gray-300   hover:bg-gray-400 text-gray-800 font-bold  rounded inline-flex items-center">
                 Ver detalle...    
      </button>
      </Link>
      </div>
    </div>
    </div>
    )
}

