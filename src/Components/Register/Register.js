import React, { useState } from 'react'
function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const sendUser= async()=>{
    try {
      const body = {username, password}
      console.log(body)
      const response =  await fetch("http://localhost:5000/register",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)     
    });
    if(response.ok){
      window.location.replace('/login')
    }
    } catch (error) {
      console.error(error.message);
    }
}
return (
<div className='Login'>
<div className="login-area">
<div className="heading-area">
<h2>Register</h2>
</div>
<div className="inputs">
  <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Email / User Name' />
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
