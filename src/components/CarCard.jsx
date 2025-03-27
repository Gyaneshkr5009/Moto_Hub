import React from 'react'
import { Separator } from './ui/separator'
import { FuelIcon } from 'lucide-react'
import { BsFuelPumpFill } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { GiGearStickPattern } from "react-icons/gi";
import { MdOpenInNew } from "react-icons/md";
import { Link } from 'react-router-dom';

const CarCard = ({car}) => {
  return (
    <Link to={'/listing-details/'+car?.id}>
        <div className='rounded-xl bg-white border hover:shadow-xl cursor-pointer'>
            <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm text-white'>New</h2>
            <img src={car?.images?.[0]} width={'100%'} height={250} alt="CarCards" 
                className='rounded-t-xl h-[210px] object-cover'
            />
            <div className='p-4'>
                <h2 className='font-bold text-black text-lg mb-2'>{car?.listingTitle}</h2>
                <Separator/>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-5 gap-4 text-center'>
                    <div className='flex flex-col items-center'>
                        <BsFuelPumpFill className='text-lg mb-1' color='green'/>
                        <h2 className='text-green-600'>{car?.mileage} Miles</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <IoSpeedometerOutline className='text-lg mb-1' color='red'/>
                        <h2 className='text-red-400'>{car?.fuelType}</h2>
                    </div>
                    <div className='flex flex-col items-center'>
                        <GiGearStickPattern className='text-lg mb-1' color='blue'/>
                        <h2 className='text-blue-600'>{car?.transmission}</h2>
                    </div>
                </div>
                <Separator className='my-2'/>
                <div className='flex items-center justify-between'>
                    <h2 className='font-bold text-xl'>{car.sellingPrice}</h2>
                    <h2 className='text-[#1414b1] text-sm flex gap-2 items-center cursor-pointer'>
                        <MdOpenInNew />
                        View Details
                    </h2>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CarCard