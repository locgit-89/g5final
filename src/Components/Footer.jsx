import pay from '../img/pay.jpg'
import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Footer = () => {
  const [time, setTime] = useState(moment());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(moment());
      }, 1000);
  
      return () => clearInterval(intervalId);
    }, []);
  
  return (
    <>
      <div id='footer'>
        <img id='pay' src={pay} alt="" />
        <div id='footerMain'>
          <div id='left'>
            <h3>CONTACT US</h3>
            <h5>Phone: +84 704983686 </h5>
            <h5>Email: thantheloc@gmail.com</h5>
            <h5>Address: 590 CMT8 street, Ward 8, District 10, HCM city</h5>
          </div>
          <div id='middle'>
            <h3>FOLLOW US</h3>
            <span><i class="fa-brands fa-facebook"></i></span>
            <span><i class="fa-brands fa-youtube"></i></span>
            <span><i class="fa-brands fa-square-instagram"></i></span>
          </div>
          <div id='right'>
            <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.2686279033572!2d106.66558972287909!3d10.78665037875049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752edac37c5025%3A0xd5fab66e51e1049d!2zTeG7uSB0aHXhuq10IMSRYSBwaMawxqFuZyB0aeG7h24gRlBUIEFyZW5h!5e1!3m2!1svi!2s!4v1728688089424!5m2!1svi!2s"}  allowfullscreen={""} loading={"lazy"}></iframe>
          </div>
        </div>
        <div id='time'>
          {time.format('HH:mm:ss')}
        </div>

      </div>
    </>
  );
}
 
export default Footer;