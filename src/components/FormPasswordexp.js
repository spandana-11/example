import React, { useState } from "react";

function FormPasswordexp() {
  //  const temparr=[
  //         {
  //             id:1,
  //             psw:"ffdf",
  //         },
  //         {
  //             id:2,
  //             psw:"dfjskdjfskjfdsk"
  //         }
  //     ]
  const [psw, setpsw] = useState({
    id: "",
    password: "",
  });
  const [list, setList] = useState([]);
  const [pswtoggle, setpswtoggle] = useState(false);

  const handlepsw = (e) => setpsw({password:e.target.value});

  const handleAdd = (e) => {
    e.preventDefault();

    const newlist = {
      psw: psw.password,
    };
    setList([...list,newlist])
  };
  return (
    <div>
      <form>
        <input
          type="text"
          name="psw"
          id="psw"
          placeholder="enter password"
          value={psw.password}
          onChange={handlepsw}
        />
        <button onClick={handleAdd}>Add</button>
      </form>
      <br />
      <hr />
      <ul>
        {list.map((eachitem) => {
          const { id, psw } = eachitem;
          return (
            <li>
              <span>
                <strong>{pswtoggle?psw:"*********"}</strong>
              </span>

              <button onClick={()=>setpswtoggle(!pswtoggle)}>{pswtoggle ? "hide":"show"}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FormPasswordexp;
