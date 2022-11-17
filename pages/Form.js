import React, { useState } from 'react'
import { onValue, ref, set } from "firebase/database";
import { db } from '../firebase'
import { uid } from 'uid';
//import "./styles.css";

function Form() {
  const [walletId, setWalletId] = useState(uid());
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const handleSubmit = () => {
    const petitionId = uid();
    set(ref(db, `${walletId}/${petitionId}/`), {
      title,
      desc,
      petitionId,
      count: 0,
    });
    alert(`uploaded in ${walletId}`);
  }

  return (
    //html
    <div class="login-box">
      <h2>Create Petition</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" onChange={e => setTitle(e.target.value)}
          ></input>
          <label>Petition Name:</label>
        </div>
        <div class="user-box">
          <input type="text" name="" onChange={e => setDesc(e.target.value)}></input>
          <label>Petition Description:</label>
        </div>
        <a href="#" onClick={handleSubmit}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Create Petition
        </a>
      </form>
    </div>


  )
}

export default Form