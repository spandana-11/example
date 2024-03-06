import React,{useReducer} from 'react'
const reducer=()=>{}
function Usereducerexp1() {
    const intialstate=
        {
            data:[
            {name:"spandana",
            mail:"spandanaguntupalli@gmail.com"}

            ]
        }
    
    useReducer(reducer,intialstate)
  return (
    <div>Usereducerexp1</div>
  )
}

export default Usereducerexp1