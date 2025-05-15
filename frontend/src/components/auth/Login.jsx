import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser, setToken } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
    const [input, setinput] = useState({
        email: "",
        password: "",
        role: ""
    });
    const { loading } = useSelector(store => store.auth);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const changeEventHandler = (e) => {
        setinput({ ...input, [e.target.name]: e.target.value });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!input.email || !input.password || !input.role) {
            toast.error('Please fill in all fields');
            return;
        }

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true,
            });
            
            if (res.data.success) {
                dispatch(setUser(res.data.user));
                dispatch(setToken(res.data.token));
                
                // Set default authorization header for all future requests
                axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;
                
                toast.success(res.data.message);
                
                // Redirect based on role
                if (res.data.user.role === 'recruiter') {
                    navigate("/admin/companies");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.error('Login error:', error);
            toast.error(error.response?.data?.message || "Login failed");
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center max-w-7xl mx-auto'>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
                    <h1 className='font-bold text-xl mb-5'>Login</h1>

                    <div className='my-2'>
                        <Label className='my-2'>Email</Label>
                        <Input
                            type="email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
                            placeholder="sufyan1234@gmail.com"
                            required
                        />
                    </div>

                    <div className='my-2'>
                        <Label className='my-2'>Password</Label>
                        <Input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
                            placeholder="****"
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <RadioGroup className='flex items-center gap-4 my-2'>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio" 
                                    name="role" 
                                    value="student"
                                    checked={input.role === 'student'}
                                    onChange={changeEventHandler}
                                    required
                                />
                                <Label htmlFor="option-one">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio" 
                                    name="role" 
                                    value="recruiter"
                                    checked={input.role === 'recruiter'}
                                    onChange={changeEventHandler}
                                    required
                                />
                                <Label htmlFor="option-two">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>
                    {
                        loading ? <Button className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin' />Please wait</Button>
                            : <Button type="submit" className="w-full my-2 bg-black text-white">Login</Button>
                    }
                    <span className="text-sm">Don't have an account? <Link to="/signup" className='text-blue-600'>Signup</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login;