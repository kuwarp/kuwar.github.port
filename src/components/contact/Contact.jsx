import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ThemeContext } from "../../Context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rrvnzco",
        "template_3v5nih4",
        formRef.current,
        "user_DrriDPTGKO2Zj4RDXCA6W"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item" style={{textDecoration:'none',fontSize:'2vh' ,color:'darkkhaki'}}>
              <img src={Phone} alt="" className="c-icon" />
              +91 701794 9440
            </div>
            <div className="c-info-item" style={{textDecoration:'none', fontSize:'2vh' ,color:'darkkhaki'}}>
              <img className="c-icon" src={Email} alt="" />
              kuwar0560@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              
              <a style={{textDecoration:'none',fontSize:'2vh' ,color:'darkkhaki'}} href="https://goo.gl/maps/otceAxCosKGEcCw49">158,Patel Nagar,Housing Board,Sector-15 ,Gurugram</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#e7e5e5",margin:'8px'}} type="text" placeholder="Type your Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#e7e5e5", margin:'8px'}}  type="text" placeholder="What you want share....." name="user_subject" />
            <input style={{backgroundColor: darkMode && "#e7e5e5",margin:'8px'}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#e7e5e5"}} rows="5" placeholder="Chat with me" name="message" />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
