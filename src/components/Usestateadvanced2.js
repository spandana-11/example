import React,{useState} from 'react'
//its related to object...................................
// we can pass directly this object name in the use state


// const intobj={
//     firstname:"spandana",
//     lastname:"Guntupalli"
// }
//we can also pass this object directly in the function usestate for example
//and also we can pass the data through the functions

// ...................we can pass this function name in the usestate
// function initalobj(){
//     return (
//        {firstname:"spandana",
//     lastname:"Guntupalli"}
//     )
// }

function Usestateadvanced2() {
    const[data,setData]=useState({firstname:"spandana",
    lastname:"Guntupalli"})
    const nameHandler=()=>{
        setData
            ({
                ...data,
            firstname:"jammula"//when am trying to change name other data is disappearing
                                //so we has to add spred operator to without distuping other data
            })
        
    }
  return (
    <div>
<h1>firstname:{data.firstname}</h1>
<button onClick={nameHandler}>change name</button>
<h1>lastname:{data.lastname}</h1>
    </div>
  )
}

export default Usestateadvanced2