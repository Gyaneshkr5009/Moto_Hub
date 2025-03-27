import axios from "axios";

const SendBirdApplicationId=import.meta.env.VITE_SENDBIRD_APP_ID;
const SendBirdApiToken=import.meta.env.VITE_SENDBIRD_API_TOKEN;
//const {CarImages} = require("configs/schema");
const FormatResult=(resp)=>{
    let result=[];
    let finalResult=[];
    //console.log("Raw Response:", resp);  (for Test)
    resp.forEach((item)=>{
        const listingId=item.carListing?.id;
        if(!result[listingId])
        {
            result[listingId]={
                car:item.carListing,
                images:[]
            };
        }
        //console.log("Car Images:", item.car_images);  (for Test)

        if (item.car_images && item.car_images.imageUrl) {
            result[listingId].images.push(item.car_images.imageUrl);
        }
    });
   
    result.forEach((item)=>{
        finalResult.push({
            ...item.car,
            images:item.images
        });
    });
 
    return finalResult;
}

const CreateSendBirdUser=(userId,nickName,profileUrl)=>{
    
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/users',{
        user_id:userId,
        nickname:nickName,
        profile_url:profileUrl,
        issue_access_token:false
    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':SendBirdApiToken
        }
    });
}


const CreateSendBirdChannel=(users,title)=>{
    return axios.post('https://api-'+SendBirdApplicationId+'.sendbird.com/v3/group_channels',{
        user_ids:users,
        is_distinct:true,
        name:title,
        operator_ids:[users[0]]

    },{
        headers:{
            'Content-Type':'application/json',
            'Api-Token':SendBirdApiToken
        }
    })
}

export default{
    FormatResult,
    CreateSendBirdUser,
    CreateSendBirdChannel
}