import React from 'react'
import UsersData from './UsersData'
import { useParams } from 'react-router-dom'

function UserDetails() {
const {userid}=useParams()
const udetails=UsersData.find((eachuser)=>eachuser.id==userid)


  return (
    <div>

    <h1>{udetails.email}</h1>
    <h2></h2>
    
    

    </div>
  )
}

export default UserDetails