import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai"


function Navbar() {
  return (
    <section className='sticky top-0 py-4 z-20 max-h-14 bg-black grid grid-rows-2'>
        {/* unnecessary  logo since my "partner* alreaady did it/}
      {/* <div className=' p-2 flex w-screen isolate justify-stretch'>
        <Image 
          src="/img/kdulogo.png"
          alt='KDUlogo'
          width={50}
          height={50}
        />
        <Image 
          src="/img/nasrdalogo.png"
          alt='NASRDAlogo'
          width={50}
          height={50}
        />
      </div> */}
      <nav className=' bg-white bg-opacity-50 justify-around py-1 px-2 rounded-full h-12 w-2/3  mx-auto border-slate-500'>
        <ul className='justify-evenly flex mx-auto items-center '>
          <li className='text-1xl hover:text-2xl rounded ring-2 ring-blue-500 text-white transition ease-in-out delay-100 hover:translate-y-1 hover:scale-110 hover:ring-indigo-500 duration-200'>
            <Link href="#">Home</Link>
          </li>
          <li className='text-1xl hover:text-2xl text-white transition ease-in-out delay-100'>
            About
          </li>
          <li className="text-1xl hover:text-2xl text-white transition ease-in-out delay-100">
            Docs
          </li>
          <li className='text-1xl hover:text-2xl text-white transition ease-in-out delay-100'>
            Contact
          </li>
          <li className='text-2xl text-slate'>
            <AiFillLinkedin />
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar
