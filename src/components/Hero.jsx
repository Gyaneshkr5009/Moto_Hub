import React from 'react'
import Search from './Search'

const Hero = () => {
  return (
    <div>
        <div className='flex flex-col items-center p-10 py-20 gap-6 h-[600px] w-full bg-[url(https://media.istockphoto.com/id/1489820875/photo/empty-room-with-brown-wall-and-hardwood-floor.webp?s=2048x2048&w=is&k=20&c=nWvMGO5Mi87dMGn9yOJFU47kIrRPxgfDgKBzEsnRDsI=)] bg-cover bg-center'>
            <h2 className='text-lg'>Find cars for Sale and for Rent near you.</h2>
            <h2 className='text-[60px] font-bold'>Find Your Dream Car.</h2>
            <Search/>
            <img src="./hero3.png" className='m-4'width={'65%'} />
        </div>
    </div>
  )
}

export default Hero