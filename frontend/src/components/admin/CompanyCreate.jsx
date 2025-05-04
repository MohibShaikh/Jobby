import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '@radix-ui/react-label'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '../utils/constant'

const CompanyCreate = () => {
    const navigate=useNavigate();
    const [companyName,setCompanyName]=useState();
    const registerNewCompany=async()=>{
        try {
            const res = await axios.get(`${COMPANY_API_END_POINT}/register`,{})
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <div className="max-w-4xl mx-auto">
                <div className="my-10">
                <h1 className="font-bold text-2xl">Your Company Name</h1>
                <p className='text-gray-500'>What would you like to give your company name? you can change this later.</p>
                </div>
                <Label>Company Name</Label>
                <Input
                    type="text"
                    className="my-2"
                    placeholder="JobHunt , Microsoft etc."
                    onChange={(e)=>setCompanyName(e.target.value)}
                />
                <div className="flex items-center gap-2 my-10">
                    <Button variant="outline" className='cursor-pointer' onClick={()=>navigate("/admin/companies")} >Cancel</Button>
                    <Button className='bg-black text-white cursor-pointer' onClick={registerNewCompany}>Continue</Button>
                </div>
            </div>
        </div>
    )
}

export default CompanyCreate