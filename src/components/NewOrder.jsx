import axios from "axios";
import { useEffect, useState } from "react";

export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a  new order, new order has status `Not Accepted`
  const [formData, setFormData] = useState({});

  const handle=(e)=>{
    console.log(e.target.value)
    const {name,value} = e.target
    setFormData({
      ...formData,
      [name]:value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8000/orders",{
      ...formData
    })
  }

  const [order,setOrder] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8000/orders")
    .then(function(response){
      setOrder([...response.data])
    })
    .catch(function(error){
      console.log(error)
    })
    .then(function(){

    })
  },[])
  return (
    <div>
      
      <div className="form">
        
        <input
        onChange={handle}
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input
        onChange={handle}
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
        onChange={handle}
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button 
        onSubmit={handleSubmit}
        className="submit">submit</button>
      </div>
            {order.map((data)=>(
      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
        </button>

        {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
        <div className="past-orders">
          <span className="id">{data.id}</span>. <span className="problem">{data.problem}</span>{" "}
          <span className="cost">${data.cost}
            {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
          </span>
          <p className="status">Status:{data.status} </p>
          <hr />
        </div>
      </div>
             ))}
    </div>
  );
};
