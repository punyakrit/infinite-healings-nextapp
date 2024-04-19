import React from 'react'
import bg from '@/public/assets/img.webp';
import Image from "next/image";
function Heading() {
  return (
    <div className="relative">
        <Image src={bg} alt="bg-image" className="w-full h-screen object-center blur-lg object-" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center  text-black">
          <h1 className="text-4xl font-bold">Welcome to my website</h1>
          <p className="text-lg">Some additional text here...</p>
        </div>
      </div>
  )
}

export default Heading
