import React, { useRef } from 'react';
import "./styles/FormContact.css";
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gi95fh4', 'template_qk2v05t', form.current, 'RLGuUO6r3LoIaIB4w')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      alert("Email Sent!");
      };


  return (
    <div className='form'>
      <form ref={form} onSubmit={sendEmail}> 
        <label>Your Name</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Subject</label>
        <input type="text" name="subject"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Enter Your Message" name="message"/>
        <button className='btn' value="send">Submit</button>
      </form>
    </div>
  )
}

export default Form;