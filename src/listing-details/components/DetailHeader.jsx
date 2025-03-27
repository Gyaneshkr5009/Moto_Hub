import React from 'react'
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { PiSpeedometerDuotone } from "react-icons/pi";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFillFuelPumpDieselFill } from "react-icons/bs";

function DetailHeader({carDetail}) {
  return (
    <div>
       {carDetail?.listingTitle? 
            <div>
                <h2 className='font-bold text-3xl'>{carDetail?.listingTitle}</h2>
                <p className='text-sm'>{carDetail?.tagline}</p>

                <div className='flex gap-2 mt-3'>
                    <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                        <HiMiniCalendarDateRange className='h-7 w-7 text-[#0866ff]'/>
                        <h2 className='text-[#0866ff] text-sm'>{carDetail?.year}</h2>
                    </div>
                    <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                        <PiSpeedometerDuotone className='h-7 w-7 text-[#0866ff]'/>
                        <h2 className='text-[#0866ff] text-sm'>{carDetail?.door}</h2>
                    </div>
                    <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                        <GiGearStickPattern className='h-7 w-7 text-[#0866ff]'/>
                        <h2 className='text-[#0866ff] text-sm'>{carDetail?.transmission}</h2>
                    </div>
                    <div className='flex gap-2 items-center bg-blue-50 rounded-full p-2 px-3'>
                        <BsFillFuelPumpDieselFill className='h-7 w-7 text-[#0866ff]'/>
                        <h2 className='text-[#0866ff] text-sm'>{carDetail?.type}</h2>
                    </div>
                </div>
            </div>
            :
            <div className='w-full rounded-xl h-[100px] bg-slate-200 animate-pulse'>
            </div>
        }
    </div>
  )
}

export default DetailHeader