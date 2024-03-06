import React from "react";
import { useState } from "react";

function IntrestProject() {
  const[principalamount,setprincipalamount]=useState("")
  const[annualrate,setannualrate]=useState("")
  const[periodunit,setperiodunit]=useState("")
  const[tacc,settacc]=useState("")

const handlepamt=(e)=>{
  setprincipalamount(e.target.value);
  console.log(principalamount)
}
const handleannrate=(e)=>{
  setannualrate(e.target.value);
}

const handleperiodunit=(e)=>{
  setperiodunit(e.target.value)
  console.log(periodunit)
}

// settacc(principalamount(1+annualrate*periodunit))


  return (
    <div className="mainpage">
      <form action="#" >
        <div className="datafields">
          <label htmlFor="intresttype">Intrest type</label>
          <select id="intresttype">
            <option selected>Simple Intrest</option>
            <option value="1">Compound Intrest</option>
          </select>
        </div>
        <div className="datafields">
            <label htmlFor="principalamount">Principal Amount (Rs).optional</label>
            <input type="text" id="principalamount" value={principalamount} onChange={handlepamt}/>
        </div>
        <div className="datafields">
            <label htmlFor="annualrate">Annual rate Optional</label>
            <input type="text" name="annualrate" id="annualrate" value={annualrate} onChange={handleannrate}/>
        </div>
        <div className="datafields">
  <label htmlFor="periodunit">Period Unit</label>
  <select id="periodunit" value={periodunit} onChange={handleperiodunit}>
    
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>

        <div className="datafields">
            <label htmlFor="period optional">Period Optional</label>
            <input type="text" id="period optional"/>
        </div>
        <div className="datafields">
          <div className="intrestdiv amount">
          <h6>Intrest Earned :</h6>
           
          </div>
          <div className="priciplediv amount">
          <h6>Principal Amount:</h6>
          <span>{principalamount}</span>
          </div>
          <div className="totalvalue amount">
          <h6>Total value:</h6>
          <span>{tacc}</span>
          </div>
        </div>

      </form>
      
    </div>
   
  );
}

export default IntrestProject;
