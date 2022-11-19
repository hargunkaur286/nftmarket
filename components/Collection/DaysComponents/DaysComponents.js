import React,{useState} from "react";
import Image from "next/image";
import { MdPadding, MdVerified } from "react-icons/md";
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
        <div className={Style.daysComponent_box_img}>
        </div>

        <div className={Style.daysComponent_box_profile}>
         
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>{el.title}</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <p>
                {el.desc}
                <span>
                  <small>
                  </small>
                </span>
              </p>
            </div>


            <div className={Style.daysComponent_box_title_info_price} onClick={()=>{setSelectedData(el); setVisible(true)}}>
              <small>Vote Now</small>
            </div>
          </div>
        </div>
      </div>

    <Modal class="modalcss" visible={visible} width="400" height="300" effect="fadeInUp" onClickAway={() => setVisible(false)}>
        <div style={{color:'black', padding: 10, backgroundColor: 'green' }}>         
          <h1 style={{color: 'blue'}}>{selectedData?.title}</h1>
          <p>{selectedData?.desc}</p>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default DaysComponents;