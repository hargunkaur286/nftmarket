import React from 'react'
import { db } from '../firebase'
import { onValue, ref, set } from "firebase/database";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { Collection, HeroSection, Subscription } from "../components/componentsindex";
import { NFTCardTwo } from '../collectionPage/collectionIndex';

function index() {
  console.log("helloooo")
  // onValue(ref(db,'/'),(snapshot)=>{
  //   const data = snapshot.val();
  //   console.log(data);
  // });

  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Collection />
      {/* <NFTCardTwo/> */}
      {/* <Subscription/> */}
    </div>
  )
}

export default index
