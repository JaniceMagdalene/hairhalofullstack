import React from 'react';
import './ContactForm.css'; 
import emailjs from '@emailjs/browser';
import { useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faRoad, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
const ContactForm=()=> {
  const form= useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_twukhcf', 'template_oee5oel', form.current, 'rwQJKhclXJDL6QvzG')
        .then((result) => {
            console.log(result.text);
            alert("Email sent successfully");
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };
    return (
      <>
      <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
                <div className="container1">
        <div className="wrapper1">
          <div className="company-info">
            <h3>CONTACT US</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faRoad} /> 44 Main Street Coimbatore
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} /> 9789299229
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} /> janicemagdalene@gmail.com
              </li>
            </ul>
          </div>
          <div className="contact">
            <h3 className='love'>E-mail Us</h3>
            <form ref={form} onSubmit={sendEmail}>
              <p>
                <label>Name</label>
                <input type="text" name="name" id="name" className='contactinput' />
              </p>
              <p>
                <label>E-mail Address</label>
                <input type="email" name="email" id="email" className='contactname' />
              </p>
              <p className="full">
                <label>Message</label>
                <textarea name="message" rows="5" id="message" />
              </p>
              <button className="button147">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </>
    );
}; 
  export default ContactForm;
  