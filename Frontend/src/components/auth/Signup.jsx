import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "@/utils/constants";
import { Toast } from "../ui/toast";

function Signup() {
  const [input, setInput] = useState({
    fullname:"",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""
  });

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]:e.target.value});
  }

  const changeFileHandler = (e) => {
    setInput({...input, file:e.target.files?.[0]});
  }

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    if(input.file) {
      formData.append("file", input.file);
    }
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
        headers: { 'Content-Type': "multipart/form-data" },
        withCredentials: true,
    });
    if (res.data.success) {
        navigate("/login");
        Toast.success(res.data.message);
    }
    } catch (error) {
      if (error.response) {
        Toast.error(error.response.data.message);
      } else {
        Toast.error("Network error occurred. Please try again.");
      }
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
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label>Full Name</Label>
            <Input 
              type="name"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Ashirwad"
            />
          </div>
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
            <Label>Phone:</Label>
            <Input 
              type="phone"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              placeholder="9876543210"
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
            <div className="flex items-center gap-2">
              <Label>Profile:</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div>
          </div>
          <Button type="submit" className="w-full my-4 bg-[#F83002] hover:bg-[#d43511]">Sign Up</Button>
          <span className="flex justify-center text-sm text-muted-foreground">Already have an account? <Link to='/login' className="text-blue-600 underline"> Login</Link></span>
        </form>
      </div>
    </>
  );
}

export default Signup;
