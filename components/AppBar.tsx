"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function AppBar() {
  const [menu, setMenu] = useState(false);

  const handleScrollToAbout = () => {
    const aboutComponent = document.getElementById("about-drag");
    if (aboutComponent) {
      aboutComponent.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(!menu);
  };
  const handleScrollToContact = () => {
    const contactComponent = document.getElementById("fid");
    if (contactComponent) {
      contactComponent.scrollIntoView({ behavior: "smooth" });
    }
    setMenu(!menu);
  };
  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className="fixed h-16 backdrop-blur-xl border-b-2 w-full border-slate-500 rounded-b-lg flex justify-between items-center md:px-16 px-8 z-40">
        <Link
          href={"/"}
          className="md:text-3xl text-2xl font-bold cursor-pointer"
        >
          InfiniteHealings.in
        </Link>
        <div>
          <div className="md:hidden">
            <FaBars
              onClick={toggleMenu}
              className="text-black text-3xl cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-10 font-bold">
          <div onClick={handleScrollToAbout} className="cursor-pointer">
            About
          </div>
          <Link href={"/services"} className="cursor-pointer">
            Services
          </Link>
          <div onClick={handleScrollToContact} className="cursor-pointer">
            Contact Us
          </div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-3xl">
          <div className="text-white h-screen w-screen  justify-center items-center p-4">
            <div
              className="flex justify-end text-3xl cursor-pointer"
              onClick={toggleMenu}
            >
              <RxCross2 />
            </div>
            <div className="flex flex-col justify-center items-center h-full space-y-10">
              <div
                onClick={handleScrollToAbout}
                className="cursor-pointer text-2xl font-semibold  transition duration-300"
              >
                About
              </div>
              <Link
                href={"/services"}
                className="cursor-pointer text-2xl font-semibold  transition duration-300"
              >
                Services
              </Link>
              <div
                onClick={handleScrollToContact}
                className="cursor-pointer text-2xl font-semibold transition duration-300"
              >
                Contact Us
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
