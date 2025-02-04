import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav id="app-navbar" className='h-[5.5rem] bg-red-400 flex justify-between items-center px-7 text-lg'>
      <div className='logo font-extrabold text-2xl text-white'>
        ShortLinks
      </div>
      <ul className='flex gap-6 justify-center items-center text-white'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact</li></Link>
        <li className='flex gap-6 justify-center items-center text-white mx-5'>
          <Link href="/shorten"><button className='bg-yellow-400 text-black rounded-full font-bold px-3 py-1 shadow-md shadow-red-600'>Shorten</button></Link>
          <Link href="/github"><button className='bg-yellow-400 text-black rounded-full font-bold px-3 py-1 shadow-md shadow-red-600'>Github</button></Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar