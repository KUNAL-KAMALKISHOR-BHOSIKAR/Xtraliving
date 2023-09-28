import React, { useState } from 'react'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Link } from 'react-router-dom'
import "./Otp.css"
import { useUserAuth } from '../../State/UserAuthContext'
function Otp() {
    const [number, setNumber]= useState("");
    const [error, setError] = useState("")
    const {setupRecaptcha} = useUserAuth()
const getOtp=async (e)=>{
  e.preventDefault()
  setError("")
console.log(number)
if(number === "" || number === undefined){
  return setError("please enter a valid phone number")
}
try {
  const response = await  setupRecaptcha(number);
  console.log(response)
} catch (error) {
  setError(error.message)
}
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
     <Link to="/login"><span>Login using password ?</span></Link> 
      <button onClick={getOtp}>send OTP</button>
      </div>
      <div className="div" id='recaptcha-container  '/>
      </div>  
    </div>
  )
}

export default Otp
