import React from 'react'
import { useContext } from 'react'
import { MyContext } from './Index'

function Home() {
    const {userInfo} = useContext(MyContext)
  return (
    <h1 className='text-4xl text-red-500'>Home {userInfo.username}</h1>
  )
}

export default Home