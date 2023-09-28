import React, { useState} from 'react'
import "./Login.css"
import { Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../../State/UserAuthContext';
import { BsPhone } from 'react-icons/bs';
import g from "./img/g.png"
import f from "./img/f.png"
function Login() {
  const {logIn,googleSignIn} = useUserAuth();
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("")
  // const [secondError, setSecondError] = useState("")
  // const [_, setCookies] = useCookies(["access_token"])
  
  const handleSubmit= async(e)=>{
    e.preventDefault()
    setError("");
    try { 
    await logIn(email, password)  
    navigate('/') 
    } catch (error) {
      setError(error.message);
    }
    }
const handleGoogleLogin =async(e)=>{
  e.preventDefault()
  try {
    await googleSignIn();
    navigate('/profile')
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
    <span>Don't have an account? Register one!</span></Link>  
      </div>
      <div className="main-area">
      <div className="inputs">
      <div className="input-error">
      <input type="text"  onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email / User Name' />
      <span>{error}</span>
        </div>
        
<input type="text" onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />      
      </div> 
      <div className="button-area">
      {/* <span>Having trouble in sign in ?</span> */}
    
      <button onClick={handleSubmit} >Login</button>
      <div className="or-area">
        <span>Or sign in with</span>
        <div className="icons-area">
  <img onClick={handleGoogleLogin} src={g} alt="" />
  <img src={f} alt="" />

        </div>
        <Link to="/mobile"><span className='sign-mob'><BsPhone/>Login with mobile</span></Link>
      </div>
      </div>
    
      </div>
      </div>  
  </div>
  )
}

export default Login

