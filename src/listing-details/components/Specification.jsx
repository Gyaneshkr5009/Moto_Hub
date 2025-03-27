import IconField from '@/add-listing/components/IconField'
import CarSpecification from '@/Shared/CarSpecification'
import React from 'react'

function Specification({carDetail}) {
  return (
    <div className="p-8 my-7 rounded-xl border shadow-md bg-white">
    <h2 className="font-semibold text-2xl text-gray-800 mb-6 text-center">Specifications</h2>

    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {carDetail?CarSpecification.map((item, index) => (
                <div 
                    key={index} 
                    className="flex flex-col items-center gap-2 p-3 rounded-lg bg-gray-100 shadow-sm 
                            transition-all duration-300 hover:scale-105 hover:shadow-md"
                >
                    <span className="bg-blue-200 text-blue-600 text-2xl p-3 rounded-full">
                        {<IconField icon={item.icon} />}
                    </span>
                    <h2 className="text-gray-700 text-sm font-medium text-center">{item.name}</h2>
                    <p className="text-gray-900 font-semibold text-center break-words">{carDetail[item.name] || 'N/A'}</p>
                </div>
            ))
            :
            <div className='w-full h-[500px] rounded-xl bg-slate-200 animate-pulse'></div>
        }
    </div>
</div>

  )
}

export default Specification