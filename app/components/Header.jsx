import Link from 'next/link'
import React from 'react'

 const Header = () => {
  return (
    <div className='bg-teal-800 flex justify-between px-10 py-3 twxt-white'>
      <h1 className='text-lg'><Link href="./" >News7.com</Link></h1>
      <div className='flex gap-3'>
        <Link href="/"> Home</Link>
        <Link href="/register"> Register</Link>
        <Link href="/insert"> Insert Post</Link>
      </div>
    </div>
  )
}
export default Header