import Nav from "./Nav";
import hinh4 from '../img/hinh4.jpg'
import Best from "./BestSeller";
import Footer from "./Footer";
// import React, {useEffect, useState} from 'react'

const Read = () => {
  // const path = process.PUBLIC_URL;

  return (
    <>
      <Nav/>
      <div id="img">
        <img src={hinh4} alt="" />
      </div>
      <Best/>
      <Footer/>
    </>
  );
}
 
export default Read;