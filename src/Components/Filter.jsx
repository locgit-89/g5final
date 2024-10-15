import Nav from "./Nav";
import { Link } from "react-router-dom";
const Filter = () => {
  return (
    <>
      <Nav/>
      <div id="filter">
        <div id="gender">
          <h2>Gender</h2>
          <Link to='men'><button>men</button></Link>
          <Link to='women'><button>women</button></Link>
        </div>
        <div id="price">
          <h2>Price</h2>
          <Link to='low'><button>0 - 40$</button></Link>
          <Link to='high'><button>40 - 80$</button></Link>
        </div>
      </div>
    </>
  );
}
 
export default Filter;