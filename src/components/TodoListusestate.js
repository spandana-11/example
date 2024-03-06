import React, { useState } from "react";

function TodoListusestate() {
  // const temparr=[
  //     {
  //         text:"hello world",
  //         id:1,
  //     },
  //     {
  //         text:"hello country",
  //         id:2
  //     }
  // ]
  const [list, setList] = useState([]);
  const [messgae, setMessage] = useState({
    text: "",
    id: "",
  });
  const [edititem, setEdititem] = useState({
    id:"",
    iseditble:false,
  });
  const handleMessage = (e) => {
    setMessage({
      ...messgae,
      text: e.target.value,
    });
  };
  const handleAdd = (e) => {
    e.preventDefault();
    const newtodo = {
      text: messgae.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newtodo]);
    setMessage({
      text:"",
      id:"",
    })
  };
  const handleRemove = (comingid) => {
    let newtodo = list.filter((eachitem) => {
      return eachitem.id != comingid;
    });
    setList(newtodo);
  };

  const changeEditstate=(id) => {
    console.log(id);
    setEdititem({
      ...edititem,
      id:id,
      iseditble:true,
    });
    let editableItem=list.find((eachitem)=>eachitem.id==id
    )
    setMessage({
      ...messgae,
      text:editableItem.text,
      id:editableItem.id

    })
// console.log(editableItem)

  };
  const handleEdit=(e)=>{
    alert("hello")
e.preventDefault();
let newtodo=list.map((eachitem)=>{
 if( eachitem.id===edititem.id){
  return(
    {
      text:messgae.text,
      id:messgae.id,
    }
  )
 }
 else{
  return eachitem;
 }
 
})
setList(newtodo)

  }
  

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="Add your List Item"
          value={messgae.text}
          onChange={handleMessage}
        />

        {edititem.iseditble ? (
          <button onClick={handleEdit}>edit</button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </form>

      <br />
      <hr />
      <ul>
        {list.length == 0 ? (
          <h1>no items found</h1>
        ) : (
          list.map((eachitem) => {
            const { text, id } = eachitem;
            return (
              <li key={id}>
                
                <span>
                  <strong>{text}</strong>
                </span>
                <button onClick={()=>changeEditstate(id)}>Edit</button>
                <button onClick={() => handleRemove(id)}>Remove</button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default TodoListusestate;
