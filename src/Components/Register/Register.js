import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { useUserAuth } from '../../State/UserAuthContext';
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess]= useState('')
  const [openModel, setOpenModel]= useState(false)
  const navigate = useNavigate();
 const {signUp} = useUserAuth();

const handleSubmit= async(e)=>{
  e.preventDefault()
  setError("");
  try { 
  await signUp(email, password)
  setSuccess("egistration successful. Confirmation email will be sent.")
  setOpenModel(!openModel)
 
     
  } catch (error) {
    setError(error.message);
  }
  }
const closeButton=()=>{
  setOpenModel(!openModel)
  navigate("/login")
}
return (
<div className='Login'>
 
<div className="login-area">
  {openModel&&(
    <div className="success">
    <p>{success}</p>
    <MdClose onClick={closeButton} />
  </div>
  )}

<div className="heading-area">
<h2>Register</h2>
</div>
<div className="inputs">
  <div className="input-error">
  <input type="text"  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email / User Name' />
  <span>{error}</span> 
  </div>
  <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />        
</div>
<div className="button-area">
<span>Registration confirmation will be emailed to you.</span>
  <input onClick={handleSubmit} type="submit" placeholder='log in' />
</div>
</div>  

</div>
  )
}

export default Register
