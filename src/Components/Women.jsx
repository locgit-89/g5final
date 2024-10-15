import data from '../data/data.json'
import { Link } from 'react-router-dom';
import Nav from './Nav';
// import Filter from './Filter';
import Footer from './Footer';
// import React, {useState} from 'react'

const Women = () => {
  const women = data.filter(r => r.gender == "man")

  const setStorage = (img, name, price, promotion) => {
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("price", price)
    sessionStorage.setItem("promotion", promotion)

  }

  const path = process.env.PUBLIC_URL;
  return (
    <>
      <Nav/>
      {/* <Filter /> */}
      <div id="parent">
          {women.length > 0 ? (
            women.map(r => (
              <Link to='item' className="link">
                <button id="item" onClick={() => setStorage(r.img, r.name, r.price, r.promotion)}>
                  <img src={`${path}/${r.img}`}  alt={r.name} />
                  <h3>name: {r.name}</h3>
                  <h3>price: {r.price}$</h3>
                </button>
              </Link>
            ))
          ) : (
            <div>
              there is no any product
            </div>
          )}
        </div>
        <Footer/>
    </>
  );
}
 
export default Women;