import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col '>
        <Link className=' px-2 py-1 ' href='/'>Crime</Link>
        <Link className='px-2 py-1 ' href='/'>Crime</Link>
        <Link className='px-2 py-1 ' href='/'>Crime</Link>
        <Link className='px-2 py-1 ' href='/'>Crime</Link> 
       
    </div>
  )
}

export default Sidebar