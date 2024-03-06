import React, { useEffect, useState } from "react";
import axios from "axios";
const url="https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
function UseeffectMocktail() {
  const [data, setData] = useState([]);
  const [searchData, setSerachData] = useState("");
  const[loading,setLoading]=useState(false)
  const[error,seterror]=useState({message:"",status:false})

  useEffect(() => {
    try{
    setLoading(true)
    seterror({message:"",status:false})
    axios
      .get(`${url}${searchData}`)
      .then((res) => {
        setData(res.data.drinks);
        setLoading(false)
        seterror({message:"",status:false})
        // if(!data.drinks){
        //   throw new Error("data not found")
        // }
        // console.log(res);
      });
    }
    catch(error){
      setLoading(false)
      seterror({message:error.message||"something went wrong...",status:true})
      console.log(error.message)
    }
    
  }, [searchData]);

// if(loading){
//   return(
//     <h1>loading.....</h1>
//   )
// }
  return (
    <div>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search here......"
        value={searchData}
        onChange={(e) =>{
          setSerachData(e.target.value)
        
        }
        } 
      />
      <br />
      <br />
      <hr />
      {/* <h1>data:{data.length}</h1> */}
      {loading && !error?.status&&<h3>loading......</h3>}

      {error?.status &&<h3>{error.message}</h3>
      }
      {
        
        !loading&&!error?.status && <ul className="cocktailData">
        {data.map((eachcocktaildata) => {
          const { idDrink, strDrink, strDrinkThumb } = eachcocktaildata;
          return (
            <div>
              <li key={idDrink}>
                <img src={strDrinkThumb} alt={strDrink} />
              </li>
              <h3>{strDrink}</h3>
            </div>
          );
        })}
      </ul>

      }
     
    </div>
  );
}

export default UseeffectMocktail;
