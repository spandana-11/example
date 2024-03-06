import React,{useState} from 'react'

function Usestatefinalcondrend() {
    const[showdata,setShowData]=useState(false)
    const handleShow=()=>{
        setShowData(!showdata)
    }
  return (
    <div>
    <button onClick={handleShow}>{showdata ? "hide" :"show"}</button>
    {showdata&&
    <div>
    <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro veritatis consequatur illum maxime eaque! Recusandae, sit velit, consectetur a molestiae maiores eligendi nisi ab cum ipsum quos laudantium fugiat commodi doloribus rem, adipisci at quia. Debitis, voluptas. Voluptas, magnam officiis.</h3>
</div>
    }
    
    </div>
  )
}

export default Usestatefinalcondrend