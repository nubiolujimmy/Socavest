import React from "react";
import Image from "next/image";


import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Monitize your passion </h1>
          <p>
           Explore, Discover,  Create, Sell and Invest the most exiciting moment of Football.
          </p>
          <Button btnName="Connect Wallet" /> 
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
            borderRadius={40}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
