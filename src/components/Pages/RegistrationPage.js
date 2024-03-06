import React, { useEffect, useState } from 'react'

function RegistrationPage() {
const lsgetdata1=()=>{
  const retrive=localStorage.getItem("lsuserdata");
    
   return retrive ? JSON.parse(retrive) : [];
}
const[userdata,setUserdata]=useState(lsgetdata1())
const[data,setData]=useState({
    name:"",
    email:"",
    password:"",
    confirmpassword:""
})
const handlesubmit=(e)=>{
    e.preventDefault();
    const inputdata={
        name:data.name,
        email:data.email,
        password:data.password,
        confirmpassword:data.confirmpassword
    }
    setUserdata([...userdata,inputdata])
    console.log(userdata)
}
useEffect(()=>{
    localStorage.setItem("lsuserdata",JSON.stringify(userdata))
},[userdata])


   
  return (
    <div className='form-divv'>
        <h3 className='text-center'>Registration</h3>
        {/* <div className="col-lg-6 form-divv"> */}
        <form >
        <div class="form-group">
    <label for="exampleInputUname">User Name</label>
    <input type="text" class="form-control" id="exampleInputUname" aria-describedby="emailHelp" placeholder="Enter UserName"maxLength={100} value={data.name} onChange={(e)=>setData({...data,name:e.target.value})}/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div class="form-group">
    <label for="exampleInputcPassword1">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputcPassword1" placeholder="Confirm Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputcPassword1">Profile Picture</label>
    <input type="file" class="form-control" id="exampleInputcPassword1" placeholder="Confirm Password"/>
  </div>
  
  <div className="sub-btn">

  <button type="submit" class="btn btn-primary mt-3 " onClick={handlesubmit}>Submit</button>
  </div>
</form>
<hr />
{
    userdata.map((eachvalue)=>{
    return(
        <div></div>
    )
    })

    
}
    </div>
    // </div>
    
  )
  
}


export default RegistrationPage