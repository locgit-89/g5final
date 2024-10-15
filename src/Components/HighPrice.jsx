import data from '../data/data.json'
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

const High = () => {
  const high = data.filter(r => r.price > 40)

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
          {high.length > 0 ? (
            high.map(r => (
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
        </div>
        <Footer/>
    </>
  );
}
 
export default High;