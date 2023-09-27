import React, { useState} from 'react'
import "./Login.css"
import { Link} from 'react-router-dom'
import { useStateValue } from '../../State/StateProvider';
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  const [secondError, setSecondError] = useState("")
  // const [_, setCookies] = useCookies(["access_token"])
  const [,dispatch] = useStateValue()
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
   
       dispatch({
        type: "LOG_IN",
        item: username
       })
        window.location.replace("/profile")
      } else if (response.status === 404){
        const data = await response.json();
        setError(data.message)
      }else if (response.status === 401){
        const data = await response.json();
        setSecondError(data.message)
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
        <div className="input-error">
        <input type="text"  onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Email / User Name' />
        <span>{error}</span>
         </div>
         <div className="input-error">
  <input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />   
  <span>{secondError}</span>     
       </div> </div>
        <div className="button-area">
        <span>Having Trouble in sign in ?</span>
        <button onClick={sendDetail} >Login</button>
        </div>
        </div>  
    </div>
  )
}

export default Login
