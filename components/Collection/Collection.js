import React, { useState, useEffect } from "react";
import { onValue, ref, set } from "firebase/database";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";
import Modal from 'react-awesome-modal';
import { db } from '../../firebase'

//INTERNAL IMPORT
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponents/DaysComponents";
import images from "../../img";

const Collection = () => {
  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);
  const [apiData, setApiData] = useState([])
  const [visible, setVisible] = useState(false);
  const [popData, setPopData] = useState('');
  useEffect(() => {
    let arr = [];
    onValue(ref(db, `/`), (snapshot) => {
      const data = snapshot.val();
      const x = Object.values(data);
      x.forEach(e => {
        Object.values(e).forEach(a => arr.push(a))
      })
      // console.log(arr, 'arr');
      setApiData(arr);
    })
  }, []);



  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };

  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };

  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };
  return (
    <div className={Style.collection}>

      <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => setVisible(false)}>
        <div>
          <h1>Title</h1>
          <p>Some Contents</p>

        </div>

      </Modal>

      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openPopular()}>
              <BsFillAlarmFill /> 24 hours
            </button>
            <button onClick={() => openFollower()}>
              <BsCalendar3 /> 7 days
            </button>
            <button onClick={() => openNews()}>
              <BsFillCalendarDateFill /> 30 days
            </button>
          </div>
        </div>
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;