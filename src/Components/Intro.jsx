import Nav from './Nav';
import Footer from './Footer';
import siteMap from '../img/siteMap.jpg'
import h1 from '../img/ga1.jpg'
import h2 from '../img/ga2.jpg'
import h3 from '../img/ga3.jpg'
import h4 from '../img/ga4.jpg'
import h5 from '../img/ga5.jpg'
import h6 from '../img/ga6.jpg'

const Intro = () => {
  return (
    <>
    <Nav/>
      <div id='library'>
        <div id='pic'>
          <h2>SITE MAP</h2>
          <img src={siteMap} alt="" />
        </div>
        <h2 id='h2Tab'>LIBRARY</h2>
        <div id='lib'>
          <img className='imgLib' id='h1' src={h1} alt="" />
          <img className='imgLib' id='h3' src={h3} alt="" />
          <img className='imgLib' id='h2' src={h2} alt="" />
          <img className='imgLib' id='h4' src={h4} alt="" />
          <img className='imgLib' id='h6' src={h6} alt="" />
          <img className='imgLib' id='h5' src={h5} alt="" />
        </div>
      </div>
      <Footer/>
    </>
  );
}
 
export default Intro;