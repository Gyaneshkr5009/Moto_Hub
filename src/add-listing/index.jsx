import Header from '@/components/Header'
import React, { useEffect } from 'react'
import carDetails from '../Shared/carDetails.json'
import InputField from './components/InputField'
import DropDownMenu from './components/DropDownMenu'
import { Separator } from '@/components/ui/separator'
import { Checkbox } from "@/components/ui/checkbox"
import features from '../Shared/features.json'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { db } from './../../configs'
import { CarImages, CarListing } from './../../configs/schema'
import TextAreaField from './components/TextAreaField'
import IconField from './components/IconField'
import UploadImages from './components/UploadImages'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner';
import { useUser } from '@clerk/clerk-react'
import moment from 'moment';
import { eq } from 'drizzle-orm'
import Service from '@/Shared/Service'



const AddListing = () => {

  const [formData, setFormData] = useState([]);
  const [featuresData , setFeaturesData]=useState([]);
  const [triggerUploadImages, setTriggerUploadImages] = useState();
  const [searchParams]=useSearchParams();
  const [Loader, setLoader] = useState(false);
  const [carInfo, setCarInfo] = useState();
  const navigate=useNavigate();
  const {user}=useUser();

  const mode=searchParams.get('mode');
  const recordId=searchParams.get('id');

  useEffect(()=>{
      if(mode=='edit'){
        GetListingDetail();
      }
  },[mode , recordId]);

  const GetListingDetail=async()=>{
    const result=await db.select().from(CarListing)
    .innerJoin(CarImages,eq(CarListing.id , CarImages.carListingId))
    .where(eq(CarListing.id, recordId));

    const resp=Service.FormatResult(result);
    setCarInfo(resp[0]);
    setFormData(resp[0]);
    setFeaturesData(resp[0].features);
  }

  const handleFeatureChange=(name , value)=>{
    //here i change (prevData) to prevdata so that react do not leave any updates
      setFeaturesData(prevData=>({
        ...prevData,
        [name]:value
      }));
      console.log(featuresData);
  };

  const handleInputChange=(name, value)=>{
    //here i change (prevData) to prevdata so that react do not leave any updates
    setFormData(prevData=>({
      ...prevData,
      [name]:value
    }));
    console.log(formData);
  };

  const onSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    console.log(formData);
    toast('Please Wait...');

    if(mode=='edit'){
      const result=await db.update(CarListing).set({
        ...formData,
        features: featuresData,
        createdBy: user?.primaryEmailAddress?.emailAddress || "guest@demo.com",
        userName:user?.fullName,
        userImageUrl:user?.imageUrl,
        postedOn: moment().format('DD/MM/YYYY')
      }).where(eq(CarListing.id,recordId)).returning({id:CarListing.id});
      console.log(result);
      navigate('/profile');
      setLoader(false);
    }
    else{
      try {
        const result = await db.insert(CarListing).values({
          ...formData,
          features: featuresData,
          createdBy: user?.primaryEmailAddress?.emailAddress || "guest@demo.com",
          userName:user?.fullName,
          userImageUrl:user?.imageUrl,
          postedOn: moment().format('DD/MM/YYYY')
        }).returning({ id: CarListing.id });
    
        if (result?.length > 0) {
          const carListingId = result[0].id;
          console.log("✅ Car Data Saved with ID:", carListingId);
    
          // Now trigger image upload with the listing ID
          setTriggerUploadImages(carListingId);
          setLoader(false);
        } else {
          console.error("❌ Error: No result returned from DB.");
        }
      } catch (e) {
        console.log("❌ Database Error:", e);
      }
    }
  };
  

  return (
    <div>
      <Header/>
      <div className='px-10 md:px-20 my-10'>
        <h2 className='font-bold text-4xl'>Add New Listing</h2>
        <form className='p-10 border rounded-xl mt-10'>
          {/*Car Details*/}
            <div>
              <h2 className='font-medium text-xl mb-6'>Car Details</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {carDetails.carDetails.map((item, index)=>(
                  <div key={index}>
                    <label className='text-sm flex gap-2 items-center mb-1'>
                      <IconField icon={item?.icon}/>
                      {item?.label} {item.required && <span className='text-red-500'>*</span> } </label>
                    {item.fieldType=='text' || item.fieldType=='number'
                    ?<InputField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                    :item.fieldType=='dropdown'
                    ?<DropDownMenu item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                    :item.fieldType=='textarea'
                    ?<TextAreaField item={item} handleInputChange={handleInputChange} carInfo={carInfo}/>
                    :null}
                  </div>
                ))}
              </div>
            </div>
          <Separator className='my-6'/>
          {/*features listing*/}
            <div>
              <h2 className='font-medium text-xl my-6'>Features</h2>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-2 '>
                {features.features.map((item,index)=>(
                  <div key={index} className='flex gap-2 items-center'>
                    <Checkbox onCheckedChange={(value)=>handleFeatureChange(item.name,value)} 
                        checked={featuresData?.[item.name]}
                    /> 
                    <h2>{item.label}</h2>
                  </div>
                ))}
              </div>
            </div>
          {/*Car Images*/}
          <Separator className='my-6'/>
          <UploadImages triggerUploadImages={triggerUploadImages}
          carInfo={carInfo}
          mode={mode}
          setLoader={(v)=>{setLoader(v);navigate('/profile')}} />
            <div className='mt-10 flex justify-end'>
              <Button type="button"
                disabled={Loader}
                onClick={(e)=>onSubmit(e)} >
                {!Loader?'Submit':<AiOutlineLoading3Quarters className='animate-spin text-lg'/>}
              </Button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default AddListing