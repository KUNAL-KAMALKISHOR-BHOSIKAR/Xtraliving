import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Profile.css"
import { useUserAuth } from '../../State/UserAuthContext';


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
      <h2>welcome {user.displayName? user.displayName: user.email}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile
