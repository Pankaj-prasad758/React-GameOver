import React, { useContext, useEffect } from 'react'
import { UserContext } from './userContext'

function Profile() {

  
    
 const {user} = useContext(UserContext)

 if (!user) return <div>Please enter username</div>
 return <div className='text-white'>Welcome: {user.username}</div> 
}

export default Profile;