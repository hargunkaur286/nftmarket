import React from 'react'
import {db} from '../firebase'
import { onValue, ref, set } from "firebase/database";

function index() {
console.log("helloooo")
onValue(ref(db,'/'),(snapshot)=>{
  const data = snapshot.val();
  console.log(data);
});

  return (
    <div>
      kashish
    </div>
  )
}

export default index
