import NewCard from '@/app/components/NewCard'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'

const page = async ({params}) => {
  let {postid} = params;
  let data = await fetch(`http://127.0.0.1:3000/api/post/${postid}`);
  data  = await data.json()
  return (
    <div className='flex p-5 gap-5'>
        <div className='w-2/12'>
          <Sidebar/>
        </div>
        <div className='w-10/12'>
          <NewCard value={data.data}/>
        </div>
    </div>
  )
}

export default page