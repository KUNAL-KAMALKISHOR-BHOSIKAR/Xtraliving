import React from 'react'

import "./Profile.css"
import { useStateValue } from '../../State/StateProvider'

function Profile() {
const [{user}] = useStateValue();
  return (
    <div className='Profile'>
      <h2>user profile page</h2>
      <h2>welcome {user}</h2>
    </div>
  )
}

export default Profile
