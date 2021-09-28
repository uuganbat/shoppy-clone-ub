import React from "react";
import Header from "../../Header/Main";
import Carousel from "./Carousel/Carousel";
import SectionSuggest from "./SectionSuggest";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <Carousel />
      <SectionSuggest />
    </div>
  );
}
