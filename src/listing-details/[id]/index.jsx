import Header from '@/components/Header'
import React, { useEffect } from 'react'
import DetailHeader from '../components/DetailHeader'
import { useParams } from 'react-router-dom'
import { CarImages, CarListing } from '../../../configs/schema';
import { db } from '../../../configs';
import { eq } from 'drizzle-orm';
import Service from '@/Shared/Service';
import { useState } from 'react';
import ImageGalary from '../components/ImageGalary';
import Description from '../components/Description';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Specification from '../components/Specification';
import FinancialCalculator from '../components/FinancialCalculator';
import Footer from '@/components/Footer';
import MostSearchCar from '@/components/MostSearchCar';

function ListingDetails() {
    const {id}=useParams();
    const [carDetail, setCarDetail] = useState(null);
    //console.log(carDetail); 

    useEffect(()=>{
        GetCarDetails();
    },[id]);

    const GetCarDetails=async()=>{
        const result=await db.select().from(CarListing)
        .innerJoin(CarImages,eq(CarListing.id , CarImages.carListingId))
        .where(eq(CarListing.id,id))

        const resp=Service.FormatResult(result);
        setCarDetail(resp[0] || {});
    }
    if (!carDetail) {
        return <p className="text-center text-lg">Loading car details...</p>;
    }

  return (
    <div>
        <Header/>
        
        <div className='p-10 md:px-20'>
            {/*Header details Components */}
            <DetailHeader carDetail={carDetail}/>
            <div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
                {/*Left */}
                <div className='md:col-span-2'>
                    {/*Image Galary */}
                    <ImageGalary carDetail={carDetail}/>
                    {/*Description */}
                    <Description carDetail={carDetail}/>
                    {/*Features List */}
                    <Features features={carDetail.features}/>
                    {/*Financial Calculator */}
                    <FinancialCalculator/>
                </div>
                {/*Right*/}
                <div className=''>
                    {/*Pricing */}
                    <Pricing carDetail={carDetail}/>
                    {/*Car Specification */}
                    <Specification carDetail={carDetail}/>
                    {/*owners Details */}
                </div>
            </div>
        </div>
        <MostSearchCar/>
        <div>
            <Footer/>
        </div>
    </div>
  )
}

export default ListingDetails