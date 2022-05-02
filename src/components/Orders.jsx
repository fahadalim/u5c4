import { useEffect, useState } from "react";
import axios from "axios"

export const Orders = () => {
  //  Get all data when admin logs in and populate it
  // store it in redux

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




  return (
    <div>
      {order.map((data)=>(
        
     
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            <tr className="orders-row" key={order.id}>
              <td className="id">{data.id}</td>
              <td className="problem">{data.problem}</td>
              <td className="owner">{data.owner_name}</td>
              <td className="status">{data.status}</td>
              <td className="cost">{data.cost}</td>
              <td className="change-status" onClick={handle}>
                {/* Show select dropdown only if status is Not Accepted */}
                <select className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                <button onSubmit={handleSubmit}>Accept</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
       ))}
    </div>
  );
};
