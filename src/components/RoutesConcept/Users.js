import React from "react";
import UsersData from "./UsersData";
import { Link } from "react-router-dom";

function Users() {
  return (
    <div>
     {
UsersData.map((eachuser)=>{
    const{id,name,email,city}=eachuser
    return(
        <Link to={`/users/${id}`}>
        <div className="maindiv">
         <div className="card-container">
            <h3>id{id}</h3>
            <h3>name{name}</h3>
            <h3>email{email}</h3>
         </div>
        </div>
        </Link>
    )
})

}
     
    </div>
  );
}

export default Users;
