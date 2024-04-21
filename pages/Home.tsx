import AppBar from "@/components/AppBar";
import React from "react";

import Heading from "@/components/Heading";
import About from "@/components/About";

function Home() {
  return (
    <div className="relative">
      <AppBar />
      <Heading/>
      <About/>
    </div>
  );
}

export default Home;
