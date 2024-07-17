import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "df30c114-ae11-4dac-840d-e5cef5005ad6");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
      <div className="contact">
        <div className="contact-col"><h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information
            below. Your feedback, questions, and suggestion are important to us as we strive
            to provide exceptional service to our customer.
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />raflyramdani622.gmail.com</li>
            <li><img src={phone_icon} alt="" />123-456-789</li>
            <li><img src={location_icon} alt="" />Komplek Gempol AsriKomplek Gempol Asri, Jl. Gempol Asri IX No. 47 Cijerah, Cigondewah, Bandung, Jawa Barat, Indonesia 40215</li>
        </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label >Your name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label >Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label >Email</label>
                <input type="email" name='email' placeholder='Enter your email' required />
                <label >Subject</label>
                <input type="subject" name="subject" placeholder='Enter subject'required/>
                <label >Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='submit'>Send now <img className=''src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      </div>
  )
}

export default Contact
