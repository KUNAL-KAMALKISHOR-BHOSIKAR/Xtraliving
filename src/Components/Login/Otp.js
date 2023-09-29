import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import "./Otp.css"
import { auth } from '../../firebase'
import OtpInput from 'react18-input-otp';
import { RecaptchaVerifier, signInWithPhoneNumber } from '@firebase/auth'
//import { useUserAuth } from '../../State/UserAuthContext'
function Otp() {
    const [number, setNumber]= useState("");
    const [error, setError] = useState("");
    const [otp, setOtp] = useState("");
    const [expandForm, setExpandForm] = useState(false)
    //const {setupRecaptcha} = useUserAuth()
    const generateRecaptcha = () => {
      window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {});
    }
  
  
  const getOtp=(e)=>{
    e.preventDefault()
    setError("")
  if(number.length >= 12){
  generateRecaptcha();


  let appVerifier = window.recaptchaVerifier;
  setExpandForm(true)
  signInWithPhoneNumber(auth, number, appVerifier)  
  .then(confirmationResult =>{
    window.confirmationResult = confirmationResult;
  }).catch((error)=>{
    console.log(error);
  });
  }

}
  return (
    <div className='Login'>
    <div className="login-area">
      <div className="heading-area">
      <h2>WELCOME</h2>
      </div>
      <div className="inputs">
      <div className="input-error">{
expandForm? (
  <input type="text" placeholder='Enter your otp' />
):(
  <PhoneInput
  defaultCountry='IN'
  placeholder="Enter phone number"
  value={number}
  onChange={setNumber}/>
)
      }
     
      <span>{error}</span>
       </div>
        
      </div>
      <div className="button-area">
     <Link to="/login"><span>Login using password ?</span></Link> 
     {expandForm?(
       <button>Submit OTP</button>
     ):( <button onClick={getOtp}>Send OTP</button>)}
     
      </div>
      <div className="recaptcha-container" id='recaptcha-container'/>
      </div>  
    </div>
  )
}

export default Otp
