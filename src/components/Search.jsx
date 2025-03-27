import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { TbDatabaseSearch } from "react-icons/tb";
import Data from "../Shared/Data"
import { useState } from 'react';
import { Link } from 'react-router-dom';
  

const Search = () => {

    const [cars, setCars] = useState(null);
    const [make, setMake] = useState(null);
    const [price, setPrice] = useState(null);


  return (
    <div className="p-2 md:p-2 bg-white rounded-md md:rounded-full flex flex-col md:flex-row gap-y-3 md:gap-x-10 px-5 items-center w-[90%] md:w-[60%]">
        <Select onValueChange={(value)=>setCars(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Cars" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="New">New</SelectItem>
                <SelectItem value="Used">Used</SelectItem>
                <SelectItem value="Certified Pre-Owned">Certified Pre-Owned</SelectItem>
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block"/>
        {/* 2nd Scrolbar*/}
        <Select onValueChange={(value)=>setMake(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Select Brand" />
            </SelectTrigger>
            <SelectContent>
                {Data.SearchBrandList.map((maker, index) => (
                    <SelectItem key={index} value={maker.name}>{maker.name}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Separator orientation="vertical" className="hidden md:block"/>
        {/* 3rd Scrolbar*/}
        <Select onValueChange={(value)=>setPrice(value)}>
            <SelectTrigger className="outline-none md:border-none w-full shadow-none text-lg">
                <SelectValue placeholder="Pricing" />
            </SelectTrigger>
            <SelectContent>
                {Data.Pricing.map((pricing , idx)=>(
                    <SelectItem key={idx} value={pricing.amount}>{pricing.amount}</SelectItem>
                ))}
            </SelectContent>
        </Select>
        <Link to={'/search?cars='+cars+"&make="+make+"&price="+price}>
            <TbDatabaseSearch className='text-[50px] bg-[#c4a6c9] rounded-2xl p-3 hover:scale-105 transition-all cursor-pointer'/>
        </Link>
    </div>
  )
}

export default Search