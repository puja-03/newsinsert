"use client"

import React, { useState } from 'react'

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      let data = await fetch("http://localhost:3000/api/user", {
        method: "POST",
        body: JSON.stringify({ name, email,password }),
        headers: {
          "Content-Type": "application/json",
        }
       
      })
      data = await data.json();
      alert(data.msg);
    }
  return (
    <div className='bg-pink-200 rounded px-4 py-8 mt-5'>
        <form method='post' onSubmit={handleSubmit}>
            <div className='mb-3 flex flex-col'> 
               <label htmlFor="name" className=" text-2xl">Name</label>
               <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}className=" text-black border border-slate-700 rounded"/> 
            </div>
            <div className='mb-3 flex flex-col'> 
               <label htmlFor="email" className="text-2xl">Email</label>
               <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}className=" text-black border border-slate-700 rounded"/> 
            </div>
            <div className='mb-3 flex flex-col'> 
               <label htmlFor="password" className=" text-2xl">Password</label>
               <input type="text" id="password" value={password} onChange={(e) => setPassword(e.target.value)}className=" text-black border border-slate-700 rounded"/> 
            </div>

            <div>
               <input type="submit" className="bg-teal-500 text-white px-3 py-2 rounded w-full"/>
            </div>
        </form>
    </div>
  )

}

export default Register