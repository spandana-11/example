import React,{useContext} from 'react'
import { Usercontext } from './usecontextfolder/Usecontext'

function Childcomponent() {
    const data=useContext(Usercontext);
    console.log(data)
  return (
    <div>Childcomponent</div>
  )
}

export default Childcomponent