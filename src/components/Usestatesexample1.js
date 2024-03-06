import React from 'react'
import { useState } from 'react';

function Usestatesexample1() {
    const[data,setData]=useState(0);
    const handleIncrement=()=>{

        setData((precount)=>{//return function previous value
            return precount+1;
        });
        setData((precount)=>{
            return precount+1
        })
        
    }
    const handleDecrement=()=>{
        setData(data-1)
    }
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <span>{data}</span>
        <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Usestatesexample1