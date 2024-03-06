import React, { useState } from "react";
import { fruitsData } from "./Data";

function DisplayData() {
  const [count, setCount] = useState(fruitsData.map(() => 1));
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState(fruitsData.map(() => false));
  const [searchitem, setsearchItem] = useState("");
  const [filter, setFilter] = useState(fruitsData);

  //search items functionality
  const handleSearch = () => {
    if(searchitem===""){
      setFilter(filter)
      return
      }
   
    const filteredFruits = fruitsData.filter((item) => {
      if(item.product.toLowerCase().includes(searchitem.toLowerCase()))
      return item
    
    });
    setFilter(filteredFruits);
    
    
  
  };
  
  
  // item.product.toLowerCase().includes(searchitem.toLowerCase())

  const handleincrement = (index) => {
    setCount((prevcount) => {
      const newcount = [...prevcount];
      newcount[index] += 1;

      return newcount;
    });
  };
  const handleDecrement = (index) => {
    setCount((prevcount) => {
      const newcount = [...prevcount];
      newcount[index] = Math.max(1, newcount[index] - 1);
      return newcount;
    });
  };

  // add to cart function
  const handleCart = (id, index) => {
    const filterdata = fruitsData.filter((item) => {
      // setCartdata(true)
      return item.id === id;
    });
    setFruits([...fruits, filterdata]);
    console.log(fruits);
    //cart items setup
    setCart((previtems) => {
      const newcart = [...previtems];
      newcart[index] = true;
      return newcart;
    });
    // console.log(eachItem)
  };
  return (
    <div>
      <div>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="SEARCH hERE....."
          value={searchitem}
          onChange={(e) => {
            setsearchItem(e.target.value);
          }}
          onKeyUp={handleSearch}
        />
      </div>
{filter.length!==0?

      <div className="display">
      
        {filter.map((eachItem, index) => {
          return (
            <div key={eachItem.id}>
              <div  className="card">
                <img src={eachItem.image} alt={eachItem.product} />
                <div className="card-body">
                  <h6>{eachItem.product} - 1 Kg</h6>
                  <h5>&#8377; {eachItem.price}</h5>
                  <div className="quantityChange">
                    <button
                      className="decbtn"
                      onClick={() => handleDecrement(index)}
                    >
                      -
                    </button>
                    <button className="mx-2 quntity">{count[index]}</button>
                    <button
                      className="incbtn"
                      onClick={() => handleincrement(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="cartbutton"
                    onClick={() => handleCart(eachItem.id, index)}
                  >
                    {" "}
                    {cart[index] ? "Added" : "Add to cart"}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {/* <Cart fruit={fruits}/> */}
      </div>
      :"item not found"
      }
    </div>
  );
}

export default DisplayData;
