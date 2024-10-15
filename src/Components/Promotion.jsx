import data from '../data/data.json'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
// import React, {useState} from 'react'

const Promotion = () => {
  const promotion = data.filter(r => r.promotion > 0)

  const setStorage = (img, name, price, promotion) => {
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("price", price)
    sessionStorage.setItem("promotion", promotion)
  }


  return (
    <>
      <Nav/>
      <div id="parent">
          {promotion.length > 0 ? (
            promotion.map(r => (
              <Link to='item' className="link">
                <button id="item" onClick={() => setStorage(r.img, r.name, r.price, r.promotion)}>
                  <img src={r.img} alt={r.name} />
                  <h3>name: {r.name}</h3>
                  <h3>price: {r.price}$</h3>
                  <h3>sale off to: <span>{r.promotion}</span>%</h3>
                </button>
              </Link>
            ))
          ) : (
            <div>
              there is no any product
            </div>
          )}
          {/* <button onClick={ham()}></button> */}
        </div>
        <Footer/>
    </>
  );
}
 
export default Promotion;