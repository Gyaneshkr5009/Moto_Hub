import React from 'react'
import { MdLocalOffer } from "react-icons/md";
import { Button } from '@/components/ui/button';

function Pricing({carDetail}) {
  return (
    <div className="p-6 md:p-10 rounded-xl border shadow-md bg-white flex flex-col items-center text-center">
        <h2 className="text-gray-700 text-lg font-medium">Our Price</h2>
        <h2 className="text-2xl font-semibold text-gray-900 mt-1">{carDetail?.sellingPrice}</h2>

        <Button 
            className="w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center py-3 rounded-lg transition-all"
            size="lg"
        >
            <MdLocalOffer className="text-xl mr-2" />
            Make an Offer
        </Button>
    </div>
  )
}

export default Pricing