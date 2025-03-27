import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { storage, ID } from "../../../appwriteConfig"; // Ensure correct 
import { db } from "../../../configs"; // Import Drizzle database
import { CarImages } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
import { Client, Storage } from "appwrite";

function UploadImages({triggerUploadImages,setLoader,carInfo,mode}) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [uploadedUrls, setUploadedUrls] = useState([]);

  const [editCarImageList, setEditCarImageList] = useState([]);
  
  useEffect(() => {
    //console.log(" Full carInfo Object:", carInfo);
    //console.log("carInfo.images:", carInfo?.images);
    if (mode === 'edit' && carInfo?.images?.length) {
      const updatedImageList = carInfo.images.map((image) => image?.imageUrl || image); 
      setEditCarImageList(updatedImageList);
      //console.log("✅ Edit Car Image List (Updated):", updatedImageList);
    }
  }, [mode, carInfo]);

  useEffect(()=>{
    if(triggerUploadImages){
        uploadToAppwrite(triggerUploadImages);
    }
  },[triggerUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
        const result=selectedFileList.filter((item)=>item!=image);
        setSelectedFileList(result);
  };

  const uploadToAppwrite = async (carListingId) => {
    setLoader(true);
    if (!carListingId) {
      console.error("❌ No Car Listing ID available for image upload.");
      setLoader(false);
      return;
    }

    const urls = [];
    for (const file of selectedFileList) {
      try {
        const response = await storage.createFile(
          import.meta.env.VITE_APPWRITE_STORAGE_ID,
          ID.unique(),
          file
        );

        const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/${import.meta.env.VITE_APPWRITE_STORAGE_ID}/files/${response.$id}/view?project=${import.meta.env.VITE_APPWRITE_PROJECT_ID}`;
        urls.push(fileUrl);
        console.log("✅ Uploaded:", file.name , fileUrl);

        // Save Image URL to CarImages Table
        await db.insert(CarImages).values({
          imageUrl: fileUrl,
          carListingId: carListingId, // Linking the image to the correct car listing
        });
        console.log("✅ Image URL stored in DB");
      } catch (error) {
        console.error("❌ Upload failed:", error);
      }
    }
    setUploadedUrls(urls);
    setLoader(false);
  };

  const client = new Client();
  client.setEndpoint("https://cloud.appwrite.io/v1").setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

  const storage = new Storage(client);

  const extractFileId = (url) => {
    const match = url.match(/files\/(.*?)\/view/);
    return match ? match[1] : null;
  };

  const onImageRemoveFromDb = async (image, index) => {
    try {
      console.log("🔍 Attempting to delete:", carInfo?.images[index]);

      // Step 1: Fetch Image Object from DB
      const imageObj = await db
          .select({ 
              id: CarImages.id, 
              imageUrl: CarImages.imageUrl, 
              carListingId: CarImages.carListingId  
          })
          .from(CarImages)
          .where(eq(CarImages.imageUrl, image))
          .limit(1);

      console.log("🛠 Query Result:", imageObj);

      const imageObject = imageObj[0] || null; 

      console.log("🛠 Query Result:", imageObject);

      const result=await db.delete(CarImages)
      .where(eq(CarImages.id,imageObject.id))
      .returning({id:CarImages.id});

      console.log("✅ DB Delete Result:", result);
      if (result.length > 0) {
        // Step 3: Extract file ID from the image URL
        const fileId = extractFileId(imageObject.imageUrl);
        if (fileId) {
            // Step 4: Delete from Appwrite Storage
            await storage.deleteFile(import.meta.env.VITE_APPWRITE_STORAGE_ID, fileId);
            console.log("✅ Deleted from Appwrite Storage:", fileId);
        } else {
            console.error("❌ Could not extract file ID from URL.");
        }

        // Step 5: Remove from UI
        setEditCarImageList(prevList => prevList.filter((_, i) => i !== index));
    }
        
    } catch (error) {
        console.error("❌ Error deleting image:", error);
    }
};


  return (
    <div>
      <h2 className="font-medium text-xl my-3">Upload Car Images</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {mode=='edit'&&
          editCarImageList.map((image, index) => (
            <div key={index} className="relative">
              <IoCloseSharp
                className="absolute m-2 text-lg text-black cursor-pointer hover:shadow-md"
                onClick={() => onImageRemoveFromDb(image,index)}
              />
              <img
                src={image}
                className="w-full h-[130px] object-cover rounded-xl cursor-pointer hover:shadow-xl"
                alt="Preview"
              />
            </div>
          ))
        }

        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoCloseSharp
              className="absolute m-2 text-lg text-black cursor-pointer hover:shadow-md"
              onClick={() => onImageRemove(image,index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[130px] object-cover rounded-xl cursor-pointer hover:shadow-xl"
              alt="Preview"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div className="border rounded-xl border-dotted border-primary w-full h-[130px] bg-blue-100 p-10 cursor-pointer hover:shadow-xl">
            <h2 className="text-lg text-center text-primary">+</h2>
          </div>
        </label>
        <input
          type="file"
          multiple
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>

      {uploadedUrls.length > 0 && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Uploaded Images</h3>
          <div className="grid grid-cols-3 gap-4">
            {uploadedUrls.map((url, index) => (
              <img
                key={index}
                src={url}
                className="w-full h-[130px] object-cover rounded-xl"
                alt="Uploaded"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadImages;
