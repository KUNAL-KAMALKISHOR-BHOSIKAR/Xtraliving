import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Profile.css"
import { useUserAuth } from '../../State/UserAuthContext';
import Legs from '../Exercise/Legs/Legs';


function Profile() {
const {user, logOut} = useUserAuth();
const navigate = useNavigate()
const check=()=>{
  if(!user){
    window.location.replace("/")
  }}
  useEffect(()=>{
    console.log(user)
    check();
  },[])
const logout= async()=>{
  try {
   await logOut();
   navigate("/")
  } catch (error) {
    console.error(error.message);
  }
}
  return (
    <div className='Profile'>
      <header>
        <h2>Workouts </h2>
        {/* {user.displayName? user.displayName: user.email} */}
      <button onClick={logout}>Logout</button>
      </header>
 <div className="exercise-area">
  <Legs/>
 </div>
    </div>
  )
}

export default Profile
