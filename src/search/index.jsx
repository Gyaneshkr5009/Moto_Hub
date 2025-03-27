import { CarListing, CarImages } from '../../configs/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { db } from '../../configs';
import Service from '@/Shared/Service';
import Header from '@/components/Header';
import Search from '@/components/Search';
import CarCard from '@/components/CarCard';

function SearchByOptions() {
    const [searchParam] = useSearchParams();
    const condition = searchParam.get('cars');
    const make = searchParam.get('make');
    const [carList, setCarList] = useState([]);

    useEffect(() => {
        GetCarList();
    }, [searchParam]); // ✅ Now updates when search params change

    const GetCarList = async () => {
        let query = db.select()
            .from(CarListing)
            .innerJoin(CarImages, eq(CarListing.id, CarImages.carListingId));

        if (condition) query = query.where(eq(CarListing.condition, condition));
        if (make) query = query.where(eq(CarListing.make, make));

        const result = await query;
        const resp = Service.FormatResult(result);

        console.log(resp);
        setCarList(resp);
    };

    return (
        <div>
            <Header />
            <div className='p-16 bg-black flex justify-center'>
                <Search />
            </div>
            <div className='p-10 md:px-20'>
                <h2 className='font-bold text-4xl'>Search Result</h2>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
                    {carList?.length > 0 ? carList.map((item, index) => (
                        <div key={index}>
                            <CarCard car={item} />
                        </div>
                    )) :
                        [1, 2, 3, 4, 5, 6].map((item, index) => (
                            <div key={index} className='h-[350px] rounded-xl bg-slate-200 animate-pulse'>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchByOptions;
