import React from "react";
import { useState } from "react";

function IntrestProject() {
  const [Aamount, setAamount] = useState("");
  const [intrest, setIntrest] = useState("");
  const [data, setData] = useState({
    principleAmount: "",
    rateofIntrest: "",
    period: "",
    periodUnit: "",
    value: "",
  });
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    switch (data.periodUnit) {
      case "yearly":
        const year = data.period * 12;
        const intrest = data.rateofIntrest / 100;
        const principalamount = data.principleAmount;
        const Aamount = principalamount * (1 + (intrest / 12) * year);
        setAamount(Aamount);
        setIntrest(Aamount - principalamount);

        break;
      case "monthly":
        const monthly = data.period;
        const mintrest = data.rateofIntrest / 100;
        const mprincipalamount = data.principleAmount;
        const mAamount = mprincipalamount * (1 + (mintrest / 12) * monthly);
        setAamount(mAamount);
        setIntrest(mAamount - mprincipalamount);

        break;
        case "weekly":
          const weekly = data.period;
          const wintrest = data.rateofIntrest / 100;
          const wprincipalamount = data.principleAmount;
          const wAamount = wprincipalamount * (1 + (wintrest / 52) * weekly);
          setAamount(wAamount);
          setIntrest(wAamount - wprincipalamount);
  
          break;
          case "day":
          const daily = data.period;
          const dintrest = data.rateofIntrest / 100;
          const dprincipalamount = data.principleAmount;
          const dAamount = dprincipalamount * (1 + (dintrest / 365) * daily);
          setAamount(dAamount);
          setIntrest(dAamount - dprincipalamount);
  
          break;
      default:
        break;
    }
  };

  // settacc(principalamount(1+annualrate*periodunit))

  return (
    <div className="mainpage">
      <form action="#" onSubmit={handleSubmit}>
        <div className="datafields">
          <label htmlFor="intresttype">Intrest type</label>
          <select id="intresttype">
            <option selected>Simple Intrest</option>
            <option value="1">Compound Intrest</option>
          </select>
        </div>
        <div className="datafields">
          <label htmlFor="principalamount">
            Principal Amount (Rs).optional
          </label>
          <input
            type="text"
            id="principalamount"
            onChange={(e) => {
              setData({ ...data, principleAmount: e.target.value });
            }}
          />
        </div>
        <div className="datafields">
          <label htmlFor="annualrate">Annual rate Optional</label>
          <input
            type="text"
            name="annualrate"
            id="annualrate"
            onChange={(e) => {
              setData({ ...data, rateofIntrest: e.target.value });
            }}
          />
        </div>
        <div className="datafields">
          <label htmlFor="periodunit">Period Unit</label>
          <select
            id="periodunit"
            onChange={(e) => {
              setData({ ...data, periodUnit: e.target.value });
            }}
          >
            <option selected>select period</option>
            <option value="yearly">yearly</option>
            <option value="monthly">monthly</option>
            <option value="weekly">weekly</option>
            <option value="day">day</option>
          </select>
        </div>

        <div className="datafields">
          <label htmlFor="period optional">Period Optional</label>
          <input
            type="text"
            id="period optional"
            onChange={(e) => {
              setData({ ...data, period: e.target.value });
            }}
          />
        </div>
        <button className="btn btn-primary mt-2">submit</button>

        <div className="datafields">
          <div className="intrestdiv amount">
            <h6>Intrest Earned :</h6>
            <span>{Math.floor(intrest)}</span>
          </div>

          <div className="priciplediv amount">
            <h6>Principal Amount:</h6>
            <span>{Math.floor(data.principleAmount)}</span>
          </div>
          <div className="totalvalue amount">
            <h6>Total value:</h6>
            <span>{Math.floor(Aamount)}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default IntrestProject;
