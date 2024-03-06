import React,{useEffect, useState} from 'react'


function UseeffectExample1() {
    const[count,setCount]=useState(0)
    const[toggle,setToggle]=useState(false)
    const handlecount=()=>{
        setCount(count+1);
    }
    

    useEffect(()=>{
        console.log("i am coming from useeffect"+count)
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handlecount}>increment</button>
    <h1 onClick={()=>setToggle(!toggle)}>{toggle?"open":"close"}</h1>
       
        

    </div>
  )
}

export default UseeffectExample1