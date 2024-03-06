import React,{useState} from 'react'

const Propsdrilling1=()=> {
    const[userdetails,setUserdetails]=useState({
        fname:"spandana",
        lname:"Guntupalli",
        email:"spandanaguntuapalli@gmail.com"
    })
  return (
    <div>
        <h1>parent component</h1>
        <ChildComponent userdetails={userdetails}/>
    </div>
  )
}

function ChildComponent(props){

    
    return(
        <div>
            <h2>child component</h2>
            <SubchildComponent userdetails={props.userdetails}/>
        </div>
    )
}

function SubchildComponent({userdetails}){
//   const{fname,lname,email} =userdetails
    
    return(
        <div>
            <h2>subchild component</h2>
            <h1>{userdetails.fname}</h1>
            <h2>{userdetails.lname}</h2>
            <h3>{userdetails.email}</h3>
           


        </div>
    )
}




export default Propsdrilling1