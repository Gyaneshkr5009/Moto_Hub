import React from 'react'

function ImageGalary({carDetail}) {
  return (
    <div>
        <img src={carDetail?.images[0]} 
        alt="image" 
        className='w-full h-[500px] object-cover rounded-xl'
        />
    </div>
  )
}

export default ImageGalary