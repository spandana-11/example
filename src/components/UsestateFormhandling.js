import React,{useState} from 'react'

function UsestateFormhandling() {
    const[name,setName]=useState("")
    const[psw,setPsw]=useState("")
    const[email,setEmail]=useState("")
    const[list,setList]=useState([])
    const handleName=(e)=>{
setName(e.target.value)
    }
    const handlePsw=(e)=>{
setPsw(e.target.value)

    }
    const handelEmail=(e)=>{
      setEmail(e.target.value)
    }
    const handleSubmit=(e)=>{
e.preventDefault();
let userobj={
  name:name,
  password:psw,
  email:email
}
console.log(userobj)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
            <input type="text" name="uname" id="uname" placeholder='User Name'value={name} onChange={handleName} />

            </div>
            <div className='form-control'>
            <input type="password" name="psw" id="psw" placeholder='Password' value={psw} onChange={handlePsw}/>

            </div>
            <div className='form-control'>
<input type="email" name="email" id="email" placeholder='Email' value={email} onChange={handelEmail}/>
            </div>
            <button>submit</button>

        </form>
    </div>
  )
}

export default UsestateFormhandling