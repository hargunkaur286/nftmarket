import React from 'react'
import {db} from '../firebase'
import { onValue, ref, set } from "firebase/database";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import { Collection, HeroSection } from "../components/componentsindex";

function index() {
console.log("helloooo")
onValue(ref(db,'/'),(snapshot)=>{
  const data = snapshot.val();
  console.log(data);
});

  return (
    <div className = {Style.homePage}>
      <HeroSection />
      <Collection/>
    </div>
  )
}

export default index
