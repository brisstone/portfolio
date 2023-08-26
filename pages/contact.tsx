// import "./contact.css"
// import Phone from "../../public/images/phone.png";
// import Email from "../../public/images/email.png";
// import Address from "../../public/images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
// import { ThemeContext } from "../../context";


var num = 6;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false)
//   const theme = useContext(ThemeContext);
//   const  = theme.state.;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vvb570w",
        "template_9f4c5lu",
        formRef.current,
        "user_9BS7FZ0nRbu27NS0ikemu"
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
          <h1 className="c-title">Let's discuss your project.</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img  alt="" src="/images/phone.png" className="c-icon" />
              +2348069002832
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/images/email.png"  alt="" />
              okolijohnson69@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src="/images/address.png"  alt="" />
              Mabushi, Abuja State
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Hello,</b> Get in touch! Always available for
            freelancing if the right project comes along.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input className="form-input" style={{backgroundColor:  "white", color: "black"}} type="text" placeholder="Name" name="user_name" />
           <p> <input style={{backgroundColor:  "white", color: "black"}} type="text" placeholder="Subject" name="user_subject" required/>   </p>
            <input style={{backgroundColor:  "white", color: "black"}} type="text" placeholder="Email" name="user_email" required/>
            <textarea style={{backgroundColor: "white", color: "black", borderBottom: "1px solid black"}} rows={num} placeholder="Message" name="message" required />
            <button className="collor px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-white-500"
            >Submit</button>
            <div>
              {done && "Thank you... I'll get back!"}
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
