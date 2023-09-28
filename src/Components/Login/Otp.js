import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import "./Otp.css"
function Otp() {
    const [number, setNumber]= useState("");
    const [error, setError] = useState("")
const sendOtp=()=>{

}
  return (
    <div className='Login'>
    <div className="login-area">
      <div className="heading-area">
      <h2>WELCOME</h2>
      </div>
      <div className="inputs">
      <div className="input-error">
      <PhoneInput
        defaultCountry='IN'
        placeholder="Enter phone number"
        value={number}
        onChange={setNumber}/>
      <span>{error}</span>
       </div>
        
      </div>
      <div className="button-area">
      <span>Having trouble in sign in ?</span>
      <button onClick={sendOtp}>send OTP</button>
      </div>
      </div>  
    </div>
  )
}

export default Otp
