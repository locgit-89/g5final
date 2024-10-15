import { Link } from 'react-router-dom';
import logo from '../img/logo.jpg'
// import React, { useState, useEffect } from 'react';
import SiteMap from './SiteMap';
const Nav = () => {
  


const Top = () => {
  window.scroll({
      top: 0,
      behavior: 'smooth'
  });
}

  return (
    <>
      <div id='head'>
        <div id='logo'>
          <Link to='/' className='link'>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div> 
          10
        </div>
      </div>

      <nav>
        <div id='face'>FACE
          <ul>
            <Link to='/makeup' className='link'><li>Make-up</li></Link>
            <Link to='/skincare' className='link'><li>Skincare</li></Link>
          </ul>
        </div>

        <Link to='/body' className='link'><div>BODY</div></Link>
        <Link to='/sunscream' className='link'><div>SUNSCREAM</div></Link>
        <Link to='/hair' className='link'><div>HAIR</div></Link>
        <Link to='/perfume' className='link'><div>PERFUME</div></Link>
        <Link to='/promotion' className='link'><div>PROMOTION</div></Link>
        <Link to='/filter' className='link'><div>FILTER</div></Link>
        <div id='about'>ABOUT
          <ul>
            <Link to='/intro' className='link'><li>Introdution</li></Link>
            <Link to='/contact' className='link'><li>Contact</li></Link>
          </ul>
        </div>
      </nav>

      <div>
        <button id='top' onClick={Top}>top</button>
      </div>

      <div>

      </div>
      <SiteMap/>
    </>
  );
}
 
export default Nav;