import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import Style from "./HeroSection.module.css";
import { Button } from "../componentsindex";
import images from "../../img";

// //SMART CONTRACT IMPORT
// import { NFTMarketplaceContext } from "../../Context/NFTMarketplaceContext";

const HeroSection = () => {
  // const { titleData } = useContext(NFTMarketplaceContext);
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          {/* <h1>{titleData} 🖼️</h1> */}
          <h1>Create Change with a Click</h1>
          <p>
          Explore web3 with us while you add your signature on success for a greater vision. Create, Discover, Sign & Store Petitions as NFTs.
          </p>
          <div style={{display:"flex"}}>
          <Button
<<<<<<< HEAD
            btnName="Vote Now!"
            handleClick={() => router.push("/vote")}
          />
          <div>

          </div>
          <Button
            btnName="Create Petition"
            handleClick={() => router.push("/form")}
=======
            btnName="Vote Now"
            handleClick={() => router.push("/searchPage")}
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc
          />
          <Button
          btnName="Create Petition"
          handleClick={() => router.push("/Form")}
          />
        </div>
        </div>
       
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.main}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>      
      </div>
    </div>
  );
};

export default HeroSection;