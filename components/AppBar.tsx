"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function AppBar() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }
  return (
    <div>
      <div className="fixed h-16 backdrop-blur-xl border-b-2 w-full border-slate-500 rounded-b-lg flex justify-between items-center md:px-16 px-8 z-10">
        <div className="md:text-3xl text-2xl font-bold cursor-pointer">
          InfiniteHealings.in
        </div>
        <div>
          <div className="md:hidden">
            <FaBars
              onClick={toggleMenu}
              className="text-black text-3xl cursor-pointer"
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-10 font-bold">
          <div className="cursor-pointer">About</div>
          <div className="cursor-pointer">Services</div>
          <div className="cursor-pointer">Contact Us</div>
        </div>
      </div>
      {menu && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-60 backdrop-blur-3xl">
          <div className="text-white h-screen w-screen  justify-center items-center p-4">
            <div className="flex justify-end text-3xl cursor-pointer" onClick={toggleMenu} ><RxCross2/></div>
            <div className="flex flex-col justify-center items-center h-full space-y-10">
              <div className="cursor-pointer text-2xl font-semibold  transition duration-300">
                About
              </div>
              <div className="cursor-pointer text-2xl font-semibold  transition duration-300">
                Services
              </div>
              <div className="cursor-pointer text-2xl font-semibold transition duration-300">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
