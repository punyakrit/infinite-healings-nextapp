import React from "react";
import Image from "next/image";

function Card({ imageUrl, title, alt, description }: any) {
  return (
    <div className="my-8 relative w-[300px] h-[420px] rounded-3xl overflow-hidden cursor-pointer">
      <div className="absolute inset-0 z-0">
        <Image src={imageUrl} layout="fill" objectFit="cover" alt={alt} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t  from-black to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-end z-10 p-4 text-white">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;
