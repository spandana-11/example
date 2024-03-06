import React,{useState} from 'react'

function ChangethemeUsememo() {
   const[number,setNumber] =useState(0)
   const[dark,setDark]=useState(false)
   const themestyle={
 backgroundColor:dark ? "black" : "white",
 color:dark ? "white" : "black",
   }
  return (
    <div>
<input type="number" name="number" id="number" value={number} onChange={(e)=>setNumber (Number(e.target.value))}/>
<h5 style={themestyle}>number{number}</h5>
<button onClick={()=>setDark(!dark)}>changetheme</button>
    </div>
    
  )
}

export default ChangethemeUsememo;