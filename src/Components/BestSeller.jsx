import data from '../data/data.json'
import { Link } from 'react-router-dom';

const Best = () => {
  const best = data.filter(r => r.best == 'y')

  const setStorage = (img, name, price, promotion) => {
    sessionStorage.setItem("img", img)
    sessionStorage.setItem("name", name)
    sessionStorage.setItem("price", price)
    sessionStorage.setItem("promotion", promotion)

  }

  return (
    <>
      <div id="parent">
          {best.length > 0 ? (
            best.map(r => (
              <Link to='/read/best/item' className="link">
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
    </>
  );
}
 
export default Best;