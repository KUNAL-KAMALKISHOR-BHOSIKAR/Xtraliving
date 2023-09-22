import React, { useEffect } from 'react'

import "./Profile.css"
import { useStateValue } from '../../State/StateProvider'

function Profile() {
const [{user}] = useStateValue();
const check=()=>{
  if(!user){
    window.location.replace("/")
  }}
  useEffect(()=>{
    check();
  },[])

  return (
    <div className='Profile'>
      <h2>welcome {user}</h2>
    </div>
  )
}

export default Profile
