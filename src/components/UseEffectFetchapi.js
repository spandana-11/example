import React,{useState,useEffect} from 'react'
import axios from 'axios';
// const Url=";

function UseEffectFetchapi() {
const[data,setData]=useState([]);
const[loading,setloading]=useState(false)
const[iserror,setiserror]=useState({
 message:"" ,
 status:"false"  
})
useEffect(()=>{
    setloading(true)
    try{
    axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        setData(res.data)
        setloading(false)
        setiserror({status:false,message:""})
    })
}
catch(error){
setloading(false)
setiserror({status:true,message:"some thing went wrong.....try again"})
}
},[])
if(loading){
    return(
        <div>
            <h3>Loading......</h3>
        </div>
    )
}
if(iserror?.status){
    return(
        <div>{iserror?.message}</div>
    )
}
// console.log(data)



  return (
    <div>
        <ul>
            {
                data.map((eachuser)=>{
                    const{id,name,email}=eachuser;
                    return(
                    <div key={id}>
                     <li>{id}</li>
                     <h3>{name}</h3>
                     <h4>{email}</h4>
                     </div>
                     
                    )
                })
            }
        </ul>
    </div>
  )
}

export default UseEffectFetchapi