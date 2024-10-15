import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./Components/Read";
import Makeup from "./Components/Makeup";
import Skincare from "./Components/Skincare";
import Body from "./Components/Body";
import Sunscream from "./Components/Sunscream";
import Hair from "./Components/Hair";
import Perfume from "./Components/Perfume";
import Promotion from "./Components/Promotion";
import Filter from "./Components/Filter";
import Item from "./Components/Item";
import Intro from "./Components/Intro";
import Contact from "./Components/Contact";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Low from "./Components/LowPrice";
import High from "./Components/HighPrice";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read/>}/>
          <Route path="/makeup" element={<Makeup/>}/>
          <Route path="/skincare" element={<Skincare/>}/>
          <Route path="/makeup/item" element={<Item/>}/>
          <Route path="/skincare/item" element={<Item/>}/>
          <Route path="/body" element={<Body/>}/>
          <Route path="/body/item" element={<Item/>}/>
          <Route path="/sunscream" element={<Sunscream/>}/>
          <Route path="/sunscream/item" element={<Item/>}/>
          <Route path="/hair" element={<Hair/>}/>
          <Route path="/hair/item" element={<Item/>}/>
          <Route path="/perfume" element={<Perfume/>}/>
          <Route path="/perfume/item" element={<Item/>}/>
          <Route path="/promotion" element={<Promotion/>}/>
          <Route path="/filter" element={<Filter/>}/>
          <Route path="/promotion/item" element={<Item/>}/>
          <Route path="/intro" element={<Intro/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/filter/men" element={<Men/>}/>
          <Route path="/filter/men/item" element={<Item/>}/>
          <Route path="/filter/women" element={<Women/>}/>
          <Route path="/filter/women/item" element={<Item/>}/>
          <Route path="/filter/low" element={<Low/>}/>
          <Route path="/filter/low/item" element={<Item/>}/>
          <Route path="/filter/high" element={<High/>}/>
          <Route path="/filter/high/item" element={<Item/>}/>
          <Route path="/read/best/item" element={<Item/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
 
export default App;