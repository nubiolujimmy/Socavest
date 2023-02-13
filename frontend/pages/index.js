import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  HeroSection,
 
  Title,
  //Category,
  Filter,
  NFTCard,
  Collection,
  AudioLive,
  Slider,
 
} from "../components/componentsindex";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      
      <Title
        heading="Audio Collection"
        paragraph="Listen to the most exicting and undisposable commentries "
      />
      <AudioLive /> 
      
      <Slider />
      <Collection />
      <Title
        heading="Featured SOCAVEST"
        paragraph="Explore and discover the unforgettable memories in the game of football"
      />
      <Filter />
      <NFTCard />
      <Title
        
      />
      
     </div>
  );
};

export default Home;
