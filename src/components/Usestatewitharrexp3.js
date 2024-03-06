import React,{useState} from 'react'

function Usestatewitharrexp3() {
    const intialarr=[
        {
            id:1,
            name:"spandana",
            designation:"developer",
            age:30,
        },
        {
            id:2,
            name:"arthy",
            designation:"developer",
            age:33,
        },


    ]
   
    let[data,setData]=useState(intialarr)
    
    const deleteHandler=(comingid)=>{
        const filterdata=data.filter((eachitem)=>{
        // console.log(eachitem)
            return eachitem.id != comingid;
            
        })
        console.log(filterdata)
        setData(filterdata);
        }
    
  return (
    <div>
<ul>
    {
data.map((eachitem,index)=>{
    
    const {name,id,designation,age}=eachitem;
    return(
    <li key={index}>

       <div>
       <h1>id:{id}</h1>
       <h2> name:{name}</h2>
       <h2>disignation:{designation}</h2>
       <h2>age:{age}</h2>
       </div>
       <button onClick={()=>deleteHandler(id)}>delete</button>

    </li>
    )
})
    }
    
</ul>
    </div>
    
  )
}

export default Usestatewitharrexp3