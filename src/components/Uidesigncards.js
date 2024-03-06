import React from 'react'
import Data from './Data';

function Uidesigncards() {
  return (
    <main className='container'>
        <ul className="comments-container">
        {
            Data.map((eachobject)=>{
                const {id,name,email,body}=eachobject;
                return(
<li key={id} className='each-comment'>
<div className="headerdiv">
<h2 className='email'>{email}</h2> 
<h3 className='name'>{name}</h3>
</div>
<p>{body}</p>
</li>
                )
            })
        }

    {/* <div className="headerdiv">
        <h2 className='email'>spandanaguntuapalli@gamil</h2>
        <h3 className='name'>some random name</h3>
    </div>
    <p className='des'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe dignissimos tenetur sit dolor, vel at blanditiis reprehenderit delectus voluptatem architecto!</p> */}

        </ul>

    </main>
  )
}

export default Uidesigncards