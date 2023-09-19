import React, { useState} from 'react'
import "./Login.css"
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const navigate = useNavigate()  
  // const [_, setCookies] = useCookies(["access_token"])
  const sendDetail= async(e)=>{
    e.preventDefault()
    try { 
      const body = {username, password}
      const response = await fetch("http://localhost:5000/login",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
        const username = data.username
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
       
        navigate("/")
      } else {
        console.error("Login failed");
      }
      // setCookies("access_token", response.formData.token)
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div className='Login'>
      <div className="login-area">
        <div className="heading-area">
        <h2>WELCOME</h2>
    <Link to="/register">
      <span>Don't Have an account? Register one!</span></Link>  
        </div>
        <div className="inputs">
        <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Email / User Name' />
  <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />        
        </div>
        <div className="button-area">
        <span>Having Trouble in sign in ?</span>
        <input onClick={sendDetail} type="submit" placeholder='log in' />
        </div>
        </div>  
    </div>
  )
}

export default Login
