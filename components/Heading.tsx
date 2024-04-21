import React from 'react'
import bg from '@/public/assets/img.webp';
import Image from "next/image";
import ImageSection from './ImageSection';
function Heading() {
  return (
    <div className="relative">
        <Image src={bg} alt="bg-image" className="w-full h-screen object-center blur-xl " />
        <ImageSection/>
        
      </div>
  )
}

export default Heading
