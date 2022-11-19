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
  const [selectedData , setSelectedData] = useState()
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


<<<<<<< HEAD


  const CardArray = [
    {
      background: images.creatorbackground2,
      user: images.user1,
      heading: "Petition 1",
      subHeading: "Hello",

    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      heading: "Petition 2",
      subHeading: "Hellosss",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      heading: "Petition 3",
      subHeading: "Hellogjnnjg",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      heading: "Petition 4",
      subHeading: "Hello",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      heading: "Petition 5",
      subHeading: "Hello",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      heading: "Petition 6",
      subHeading: "Hello",
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
      heading: "Petition 7",
      subHeading: "Hello",
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
      heading: "Petition 8",
      subHeading: "Hello",
    },
  ];
=======
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc

  // const newsArray = [
  //   {
  //     background: images.creatorbackground3,
  //     user: images.user3,
  //   },
  //   {
  //     background: images.creatorbackground4,
  //     user: images.user4,
  //   },
  //   {
  //     background: images.creatorbackground5,
  //     user: images.user5,
  //   },
  //   {
  //     background: images.creatorbackground6,
  //     user: images.user6,
  //   },
  //   {
  //     background: images.creatorbackground1,
  //     user: images.user1,
  //   },
  //   {
  //     background: images.creatorbackground2,
  //     user: images.user2,
  //   },
  // ];
  // const followingArray = [
  //   {
  //     background: images.creatorbackground1,
  //     user: images.user1,
  //   },
  //   {
  //     background: images.creatorbackground2,
  //     user: images.user2,
  //   },
  //   {
  //     background: images.creatorbackground3,
  //     user: images.user3,
  //   },
  //   {
  //     background: images.creatorbackground4,
  //     user: images.user4,
  //   },
  //   {
  //     background: images.creatorbackground5,
  //     user: images.user5,
  //   },
  //   {
  //     background: images.creatorbackground6,
  //     user: images.user6,
  //   },
  //   {
  //     background: images.creatorbackground7,
  //     user: images.user7,
  //   },
  //   {
  //     background: images.creatorbackground8,
  //     user: images.user8,
  //   },
  // ];

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

     

      <div className={Style.collection_title}>
        <h2>List of Petitions</h2>
        {/* <div className={Style.collection_collections}>
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
        </div> */}
      </div>
      {popular && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )}

      {/* {following && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )} */}

      {/* {news && (
        <div className={Style.collection_box}>
          {apiData.map((el, i) => (
            <DaysComponent setVisible={setVisible} selectedData={selectedData} setSelectedData={setSelectedData} visible={visible} key={i + 1} i={i} el={el} />
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Collection;