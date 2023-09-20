import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const [success, setSuccess]= useState('')
  const [openModel, setOpenModel]= useState(false)

  const navigate = useNavigate();
  const sendUser= async()=>{
   
    try {
      const body = {username, password}
      const response =  await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)     
    });
    if(response.status === 200){
      const jsonData = await response.json()
      console.log(jsonData.message)
      setSuccess(jsonData.message)
      setOpenModel(!openModel)
    }else if(response.status === 400) {
      const jsonData = await response.json()
      setError(jsonData.message)
      console.log(jsonData.message)
    } 
    } catch (error) {
      console.error(error.message);
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
  <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Email / User Name' />
  <span>{error}</span> 
  </div>
  <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />        
</div>
<div className="button-area">
<span>Registration confirmation will be emailed to you.</span>
  <input onClick={sendUser} type="submit" placeholder='log in' />
</div>
</div>  

</div>
  )
}

export default Register
