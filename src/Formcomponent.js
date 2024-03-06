import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'

function Formcomponent() {
    const[visible,setVisible]=useState(false)
    const[data,setData]=useState(
        {
            email:"",
            psw:"",
        }
    )
    const[list,setList]=useState([])
   
    const handleAdd=(e)=>{
        e.preventDefault();
const newdata={
   email:data.email,
   psw:data.psw,
}
setVisible("data added ",true)
setTimeout(() => {
setVisible(false)
    
}, 2000);
 

setList([...list,newdata])
data.email=""
data.psw=""


}
console.log(list)
  return (
    
    <div className='container'>
        <h1>{visible}</h1>
        <h1 className='text-primary text-center'>Login Form</h1>
        <div className="formdiv col-lg-6">

        <form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={data.email} onChange={(e)=>setData({...data,email:e.target.value})}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" value={data.psw} onChange={(e)=>setData({...data,psw:e.target.value})}/>
  </div>
 
  <button type="submit" className="btn btn-primary" onClick={handleAdd}>Submit</button>
</form>
</div><br />
<hr />
<ul>
    {
        list.map((eachvalue)=>{
            const{email,psw}=eachvalue;
            return(
                  <div>
               <span><h4>Email:{email}</h4>
               Password:{psw}
               </span> 
               
               </div>
            )
        })
    }
</ul>
    </div>
  )
}


export default Formcomponent