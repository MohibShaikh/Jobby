import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { COMPANY_API_END_POINT } from '../utils/constant';

const PostCompany = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        name: '',
        description: '',
        industry: '',
        location: '',
        website: ''
    });
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        
        // Validate required fields
        if (!input.name || !input.description || !input.industry || !input.location || !input.website) {
            toast.error("Please fill in all required fields");
            return;
        }

        try {
            setLoading(true);
            const res = await axios.post(`${COMPANY_API_END_POINT}/post`, input, {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            if (res.data.success) {
                toast.success(res.data.message);
                navigate('/admin/companies');
            }
        }
        catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Failed to post company");
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div>
            {/* Render your form here */}
        </div>
    );
}

export default PostCompany; 