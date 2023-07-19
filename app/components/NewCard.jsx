"use client"
import { data } from 'autoprefixer'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'

const NewCard = ({value,read}) =>{
  const router = useRouter();

  const handleDelete = async(id)=>{
    let data = await fetch(`/api/post/${id}`,{
    method:"DELETE",
    headers:{"ContentType":"application/json",
  }
  })
  data = await data.json();
  alert(data.msg)
  router.push("/")

  }
const handleUpdate = async(id)=>{

}
  return (
    <div className='flex-1 flex flex-col px-3 py-2 rounded bg-slate-300'>
        <h1 className='font-bold text-lg text-black'>{value.title}</h1>
        <p className='text-black'>Author:{value.author}|date:{value.createAt}</p>
        <p className='text-black'>{value.content}</p>
        <div className='flex justify-end'>
          {read && <Link href={`/view/${value._id}`} className='bg-teal-600 px-3 text-white py-2 rounded'>Read More</Link>}
          {!read && <button onClick = {() => handleDelete(value._id)} className='bg-red-600 px-3 text-white py-2 rounded'>Delete</button>}
          {!read && <Link href={`/update/${value._id}`} className = 'bg-green-700 ml-2 texh-white px-3 py-2 hover:bg-green-900 rounded'> Edit</Link>}
        </div>
    </div>
  )
}

export default NewCard