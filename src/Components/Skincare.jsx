import data from '../data/data.json'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
// import React, {useState} from 'react'

const Skincare = () => {
  const skincare = data.filter(r => r.type == "skincare")

  const setStorage = (img, name, price, promotion) => {
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("price", price)
    sessionStorage.setItem("promotion", promotion)
  }

  // const [pro, setPro] = useState(data)
  // const ham = () => {
  //   const sortProduct = [...skincare].sort((a, b) => a.price - b.price)
  //   setPro(sortProduct)
  // }
  return (
    <>
      <Nav/>
      <div id="parent">
          {skincare.length > 0 ? (
            skincare.map(r => (
              <Link to='item' className="link">
                <button id="item" onClick={() => setStorage(r.img, r.name, r.price, r.promotion)}>
                  <img src={r.img} alt={r.name} />
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
          {/* <button onClick={ham()}></button> */}
        </div>
        <Footer/>
    </>
  );
}
 
export default Skincare;