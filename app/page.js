import React from 'react'
import Sidebar from './components/Sidebar'
import NewCard from './components/NewCard'

 const page = async () => {
  let callingNews = await fetch("http://127.0.0.1:3000/api/post",{cache:"no-store"});
  callingNews = await callingNews.json();
  return (
    <div className='flex'>
      <div className='w-2/12 bg-slate-500 h-[93vh]'>
        <Sidebar/>
      </div>
      <div className='w-10/12  p-5 flex flex-col gap-2'>
        {callingNews.data.map((value,key)=>(<NewCard value={value} key={key} read={true}/>))} 
     </div>
    </div>
  )
}
export default page
