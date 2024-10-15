import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'
// import React, { useState, useEffect } from 'react';
const SiteMap = () => {

  return (
    <>
      <div id='sm'>
        <span id='name'>site map</span>
        <div id='headSM'>
          <div id='logoSM'>
            <Link to='/' className='link'>
              <div className='div' id='homeSM'>HOME</div>
            </Link>
          </div>
        </div>

        <div id='nav'>
          <div id='faceSM'>FACE
            <ul>
              <Link to='/makeup' className='link'><li>Make-up</li></Link>
              <Link to='/skincare' className='link'><li>Skincare</li></Link>
            </ul>
          </div>
          <Link to='/body' className='link'><div className='div'>BODY</div></Link>
          <Link to='/sunscream' className='link'><div className='div'>SUNSCREAM</div></Link>
          <Link to='/hair' className='link'><div className='div'>HAIR</div></Link>
          <Link to='/perfume' className='link'><div className='div'>PERFUME</div></Link>
          <Link to='/promotion' className='link'><div className='div'>PROMOTION</div></Link>
          <Link to='/filter' className='link'><div className='div'>FILTER</div></Link>
          <Link to='/' className='link'><div id='about' >ABOUT
            <ul>
              <Link to='/intro' className='link'><li>Introduction</li></Link>
              <Link to='/contact' className='link'><li>Contact us</li></Link>
            </ul>
            </div></Link>
        </div>
      </div>
    </>
  );
}
 
export default SiteMap;