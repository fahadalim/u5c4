import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

export const Login = () => {
  const [users,setUser]  = useState({});
  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e)=>{
    setUser({
      ...users,
      [e.target.name]:e.target.value,
    })
  }
  const handleSubmit = (e)=>{
    navigate("orders")
  }
   return (
     <form
     onSubmit={handleSubmit}
     >
    <div>
      <input
      onChange={handleChange}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input
      onChange={handleChange}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit">Login</button>
    </div>
    </form>
  );
};
