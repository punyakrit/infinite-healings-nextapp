import AppBar from "@/components/AppBar";
import React from "react";

import Heading from "@/components/Heading";
import About from "@/components/About";
import Services from "@/components/Services";

function Home() {
  return (
    <div >
      <AppBar />
      <Heading/>
      <About/>
      <Services/>
    </div>
  );
}

export default Home;
