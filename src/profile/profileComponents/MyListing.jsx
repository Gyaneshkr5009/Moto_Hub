import React, { useEffect,useState } from 'react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { desc ,eq } from 'drizzle-orm'
import { db } from './../../../configs'
import { useUser } from '@clerk/clerk-react'
import { CarImages, CarListing } from './../../../configs/schema'
import Service from '@/Shared/Service'
import CarCard from '@/components/CarCard'
import { FaRegTrashCan } from "react-icons/fa6";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


function MyListing() {

  const {user} = useUser();
  const [carList, setCarList] = useState([]);
  useEffect(()=>{
    user&&GetUserCarListing();
  },[user]);
  
  const GetUserCarListing=async()=>{
    //console.log("User object:", user); (for Debugging)
    //console.log("Fetching data for:", user?.primaryEmailAddress?.emailAddress);
    const result=await db.select().from(CarListing)
    .leftJoin(CarImages,eq(CarListing.id , CarImages.carListingId))
    .where(eq(CarListing.createdBy , user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(CarListing.id))

    const resp=Service.FormatResult(result)
    //console.log(resp); (for debugging)
    setCarList(resp);
  }

  // 🚀 Handle Delete Listing
  const handleDelete = async (id) => {
    try {
      //Step 1: Deleting all related images from CarImages first
      await db.delete(CarImages).where(eq(CarImages.carListingId, id));

      //Step 2: Now deleting the listing from CarListing
      await db.delete(CarListing).where(eq(CarListing.id, id));

      //Step 3: Update the UI
      setCarList(carList.filter(car => car.id !== id));
    } catch (error) {
      console.error("Error deleting listing:", error)
    }
  }

  return (
    <div className='mt-6'>
        <div className='flex justify-between items-center'>
            <h2 className='font-bold text-4xl'>My Listing</h2>
            <Link to={'/add-listing'}>
                <Button>+ Add New Listing</Button>
            </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 mt-7 gap-5'>
          {carList.map((item,index)=>(
            <div key={index}>
              <CarCard car={item}/>
              <div className='p-2 bg-gray-50 rounded-lg grid grid-cols-4 justify-between gap-3'>
                <Link to={'/add-listing?mode=edit&id='+item?.id} className='col-span-3'>
                  <Button className='w-full hover:cursor-pointer' variant="outline">Edit</Button>
                </Link>
                
                {/* 🚨 Delete Confirmation Dialog */}
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="hover:cursor-pointer" variant="destructive"><FaRegTrashCan /></Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete your listing.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDelete(item.id)}>
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>

              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default MyListing