import React,{useState} from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import Modal from 'react-awesome-modal'
//INTERNAL IMPORT
import Style from "./DaysComponents.module.css";
import images from "../../../img";

const DaysComponents = ({ el, i ,setVisible , visible, setSelectedData, selectedData}) => {
  
  return (
    <>
     
    <div className={Style.daysComponent}>


      {/*  start  */}
      <div className={Style.daysComponent_box}>
<<<<<<< HEAD
        <div className={Style.daysComponent_box_img}>  
          <Image
            src={el.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"

            // width={500}
            // height={300}
            
            objectFit="covers"
          />
        </div>

        {/* <div className={Style.daysComponent_box_profile}>
          <Image
            src={images[`creatorbackground${i + 2}`]}
            alt="profile"
          
            // width={200}
            // height={200}
          
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 4}`]}
            alt="profile"
            // width={200}
            // height={200}
            className={Style.daysComponent_box_img_2}
            objectFit="covers"
          />
          <Image
            src={images[`creatorbackground${i + 3}`]}
            alt="profile"
            // width={200}
            // height={200}
            className={Style.daysComponent_box_img_3}
            objectFit="covers"
          />
        </div> */}

        <div className={Style.daysComponent_box_title}>
          <h2>{el.heading}</h2>
=======
        <div className={Style.daysComponent_box_img}>
        </div>

        <div className={Style.daysComponent_box_profile}>
         
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>{el.title}</h2>
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <p>
<<<<<<< HEAD
                {el.subHeading}
                <span> 
=======
                {el.desc}
                <span>
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc
                  <small>
                  </small>
                </span>
              </p>
            </div>
<<<<<<< HEAD
            <div className={Style.daysComponent_box_title_info_price}>
=======

            <div className={Style.daysComponent_box_title_info_price} onClick={()=>{setSelectedData(el); setVisible(true)}}>
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc
              <small>Vote Now</small>
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD

      {/* END */}

=======
    <Modal visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => setVisible(false)}>
        <div style={{color:'black'}}>
          <h1>{selectedData?.title}</h1>
          <p>{selectedData?.desc}</p>
        </div>
      </Modal>
>>>>>>> d456782f291082d15e4753dc5c6aa76133fb97dc
    </div>
    </>
  );
};

export default DaysComponents;