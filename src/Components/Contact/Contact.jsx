import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg_icon.png'
import mail_icon from '../../assets/mail_icon.png'
import phone_icon from '../../assets/phone_icon.png'
import location_icon from '../../assets/location_icon.png'
import arrow_forward from '../../assets/arrow_forward.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "d2aea418-120a-4787-b452-d9ad23630763");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt=''/></h3>
            <p>For more information about our programs and how to enroll for are various class sections and more, please contact us at:</p>
         <ul>
            <li><img src={mail_icon} alt=''/> princewireko@ymail.com</li>
            <li><img src={phone_icon} alt=''/>+233 54 881 0664</li>
            <li><img src={location_icon} alt=''/>Otamens - Annortown, RockCity<br/> G236, StoneHouse</li>
         </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <input type='text' name='name'  placeholder='Your Name' required/>
                <input type='email'  name='email' placeholder='Your Email' required/>
                <input type='text'  name='phone' placeholder='Phone Number' required/>
                <textarea placeholder='Your Message' name='message' rows="6" required></textarea>
                <button type='submit' className='btn dark-btn'>Send Message <img src={arrow_forward} alt=''/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact