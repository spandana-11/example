import React,{useState} from 'react'
function UsestateformHandle2() {
const[name,setName]=useState("")
const[password,setPassword]=useState("")
const[email,setEmail]=useState("")

const handleChange=(e,name)=>{
if(name=="name"){
    setName(e.target.value)
}
else if(name=="password"){
    setPassword(e.target.value)
}
else if(name==="email"){
    setEmail(e.target.value)
}
}
const handleSubmit=(e)=>{
e.preventDefault();

}
  return (
    <div>
<form onSubmit={handleSubmit}>
    <div className="form-control">
    <input type="text" name="unmae" id="uname" placeholder='UserName' value={name} onChange={(e)=>handleChange(e,"name")} />

    </div>
    <div className="form-control">
<input type="password" name="psw" id="psw" value={password} placeholder='password'onChange={(e)=>handleChange(e,"password")}/>
    </div>
    <div className='form-control'>
        <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e)=>handleChange(e,"email")}/>
    </div>
    <button>Submit</button>
    

</form>
    </div>
  )
}

export default UsestateformHandle2