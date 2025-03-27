import React, { useEffect , useState } from 'react'
import CarCard from './CarCard';
import { CarListing,CarImages } from './../../configs/schema';
import { eq ,desc } from 'drizzle-orm';
import { db } from './../../configs';
import Service from '@/Shared/Service';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const MostSearchCar = () => {
    
  const [carList, setCarList] = useState([]);

    useEffect(()=>{
      GetPopularCarList();
    },[])

    const GetPopularCarList=async()=>{
      const result=await db.select().from(CarListing)
          .leftJoin(CarImages,eq(CarListing.id , CarImages.carListingId))
          .orderBy(desc(CarListing.id))
          .limit(10)
      const resp=Service.FormatResult(result)
      //console.log(resp);
      setCarList(resp);
    }

  return (
    <div className='mx-24'>
        <h2 className='font-bold text-3xl text-center mt-16 mb-7'>Most Searched Cars</h2>
        <Carousel>
            <CarouselContent>
                {carList.map((car , index)=>(
                    <CarouselItem key={car.id||index} className="lg:basis-1/4 md:basis-1/3 basis-1/1">
                        <CarCard car={car} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    </div>
  )
}

export default MostSearchCar