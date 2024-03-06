import React from 'react'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const usenavigate=useNavigate();
  return (
    <div className='container'>

<form className='form-div'>

<div className="form-fields">
<h1 className='login-heading text-primary'  >Log in</h1>
  <div class="form-group col-lg-12">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group col-lg-12">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
 
 <button  onClick={()=>{usenavigate('/success')}} type="submit" class="btn btn-primary login-button">Submit</button>
 <span></span> 
 <span>
  <p className="login-text">Need an account? <button className='btn btn-primary' onClick={() => { usenavigate('/signup') }}>Sign UP</button></p>

  </span>
  </div>
</form>





    </div>
    
  )
}

export default LoginPage