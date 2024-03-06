import React,{useState,useEffect} from 'react'

function UseeffectInnwidtExp2() {
  const[pagewidth,setPagewidth]=useState(window.innerWidth)
  useEffect(()=>{
const resizehandler=window.addEventListener("resize",()=>{
  setPagewidth(window.innerWidth)
})
return()=>{
  window.removeEventListener("resize",resizehandler)
}
  })
  return ()=>{
    <div>{pagewidth}</div>
  }
}

export default UseeffectInnwidtExp2