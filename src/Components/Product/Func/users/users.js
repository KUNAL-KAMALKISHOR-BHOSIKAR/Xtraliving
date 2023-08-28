import React from 'react'
import "./users.css"
import user1 from "./img/user1.png"
import user2 from "./img/user2.png"
import users from "./img/users.png"

function Users() {
  return (
    <div className='users'>
<h2>Hear It From <span style={{color:"#4E62D6"}}> Our Users</span></h2>


<img src={users} height={300} alt="" className='for-small' />

     <div className="user-img">
      <img src={user1} alt=""  />  
      <img src={user2} alt=""  /> 
      <div className="txt-for-2nd">
        <p>FUNc has completely transformed my fitness journey. I've never felt so secure during my workouts!</p>
        <span>Jordan K</span>
      </div>
      <div className="txt-for-1st">
        <p>The metal ball design is ingenious! No more fearing weight drops during intense routines</p>
        <span>priya R.</span>
      </div>
      </div> 
    </div>
  )
}

export default Users
