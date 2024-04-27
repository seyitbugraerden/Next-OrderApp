import Campaigns from "@/components/Campaigns";
import Carousel from "@/components/Carousel";
import Header from "@/components/layouts/Header";
import MenuWrapper from "@/components/product/MenuWrapper";
import React from "react";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <Campaigns />
      <MenuWrapper />
    </div>
  );
}

export default Home;