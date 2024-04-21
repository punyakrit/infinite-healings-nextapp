import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
  return (
    <div className='bg-gray-900 h-32 text-white flex px-10 justify-between items-center'>
      <Link href={"https://www.infinitehealings.in/"} className='font-bold text-2xl cursor-pointer'>
        InfinteHealings.in
      </Link>
      <div className='flex flex-col text-xl  items-center'>
        Socials
        <Link href={"https://wa.me/9876599987"}>
          <FaWhatsapp className='text-2xl font-bold cursor-pointer'/>
        </Link>
      </div>
    </div>
  )
}
