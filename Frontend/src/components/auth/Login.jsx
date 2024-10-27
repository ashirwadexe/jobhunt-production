import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from "@/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "@/redux/authSlice";
import store from "@/redux/store";
import { Loader2 } from "lucide-react";


function Login() {
  const [input, setInput] = useState({
    email:"",
    password:"",
    role:"",
  });

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      if(res.data.success){
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      dispatch(setLoading(false));
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form
          onSubmit={submitHandler}
          className="p-8 w-1/2 border border-gray-200 rounded-md p-y my-10 bg-white shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]"
        >
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label>Email:</Label>
            <Input 
              type="email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
              placeholder="ashirwadbappy@gmail.com"
            />
          </div>
          <div className="my-2">
            <Label>Password</Label>
            <Input 
              type="password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
              placeholder="abcd1234"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-2">
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='student'
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />
                <Label htmlFor="r1">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type='radio'
                  name='role'
                  value='recruiter'
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className='cursor-pointer'
                />  
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading ? <Button className="w-full my-4 bg-[#F83002]"><Loader2 className="mr-2 h-4 w-4 animate-spin"/>Please wait</Button> : <Button type="submit" className="w-full my-4 bg-[#F83002] hover:bg-[#d43511]">Login</Button>
          }         
          <span className="flex justify-center text-sm text-muted-foreground">Don't have an account? <Link to='/signup' className="text-blue-600 underline"> Signup</Link></span>
        </form>
      </div>
    </>
  );
}

export default Login;