import AppBar from "@/components/AppBar";
import React from "react";

import Heading from "@/components/Heading";
import About from "@/components/About";
import Services from "@/components/Services";
import Accordian from "@/components/Accordian";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div >
      <AppBar />
      <Heading/>
      <About/>
      <Services/>
      <Accordian/>
      <Footer/>
    </div>
  );
}

export default Home;
