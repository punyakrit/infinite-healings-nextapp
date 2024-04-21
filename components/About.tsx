import React from "react";
import img from "@/public/assets/about.jpeg";
import Image from "next/image";
import bg from "@/public/assets/glow-bg.svg";

function About() {
  return (
    <div className=" mt-20 h-max relative  rounded-y-3xl">
      <Image
        src={bg}
        alt="infinitehealings bg-image"
        
        className="w-screen h-screen   object-cover blur-2xl  "
      />

      <div className="md:flex absolute pb-5 pt-10 top-0 left-0 w-full h-full   justify-center items-center">
        <div className="md:w-1/2 px-10 flex py-4 flex-col justify-center font-medium text-xs md:text-sm space-y-3">
          <div>Hello, Beautiful Souls,</div>
          <div>
            Welcome to the realm of infinitehealings possibilities, guided by
            the compassionate wisdom of the universe. I am Ksimmi Arora, honored
            to serve as a conduit for spiritual transformation as a Reiki Grand
            Master, Intuitive Tarot Card Reader, and Numerologist.
          </div>
          <div>
            In this sacred space of infinitehealings, I specialize in a diverse
            array of modalities designed to illuminate your path to
            self-discovery and well-being. Through the gentle touch of Reiki,
            the intuitive insights of Tarot, and the profound revelations of
            Numerology, I offer a beacon of light for those seeking guidance,
            healing, and inner peace.
          </div>
          <div>
            If you find yourself ensnared in repetitive life patterns, facing
            daunting obstacles, or struggling in your relationships, know that
            you are not alone. Together, we can unravel the threads of discord
            and weave a tapestry of harmony and joy.
          </div>
          
          <div>
            Thank you for considering the opportunity for infinite healing and
            transformation. Reach out, and let us embark on this sacred journey
            together, towards boundless joy and fulfillment.
          </div>
          <div className="text-end text-gray-800 font-bold">
            - K Simmi Arora
          </div>
        </div>
        <div className="md:w-1/2 px-10 py-4 flex justify-center">
          <Image
            src={img}
            alt="infinitehealings image"
            className="rounded-3xl "
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default About;
