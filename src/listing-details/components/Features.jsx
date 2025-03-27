import React from 'react'
import { CiSquareCheck } from "react-icons/ci";

function Features({features}) {

  return (
    <div className='p-10 my-7 rounded-xl border shadow-md'>
        <h2 className='font-medium text-2xl'>Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(features).map(([feature, value], index) => (
                <div
                key={index}
                    className="flex items-center gap-2 p-3 border border-gray-300 rounded-lg 
                                transition-all duration-300 hover:shadow-lg hover:scale-105 w-full"
                    >
                    <CiSquareCheck className="text-green-600 text-xl shrink-0" />
                    <h2 className="text-gray-800 font-medium truncate">{feature}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Features