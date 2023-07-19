"use client"

import { data } from 'autoprefixer';
import React, { useState } from 'react'

const LoginCard = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e)=>{
        e.preventDefault();

        let  data = await fetch("api/user/login",{
            method:"POST",
            body:JSON.stringify({email,password}),
            headers:{
                "Content-Type":"application/json"
            }
        }) 
        data = await data.json();
        alert(data.msg);
    }
  return (
    <div className='bg-slate-400 p-3 rounded '>
        <form method='post' onSubmit={handleLogin} className='flex flex-col'>
            <div className='mb-3 flex flex-col'>
                <label htmlFor='email'>Email</label>
                <input type='email' className='px-2 py-2 rounded border text-black' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='mb-3 flex flex-col'>
                <label htmlFor='password'>Password</label>
                <input type='password' className='px-2 py-2 rounded border text-black' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className='mb-3 flex flex-col'>
               <button type="submit" className="bg-green-500 text-white hover:bg-green-900 px-3 py-2 rounded">Login</button>
            </div>
        </form>
    </div>
  )
}

export default LoginCard