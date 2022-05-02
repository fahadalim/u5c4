import { useEffect } from "react";
import { AuthContext } from "../contexts/authContext";

export const Logout = () => {
  // Logout component, just log user out and take him to `/` homepage

  // suggestion: if you are storing anyting in redux it's a good idea to
  // empty it before loggin out. eg: order
// const {handleAuth} = useContext(AuthContext)
// useEffect(()=>{
//   handleAuth(false)
// },[])
  return <>
  {/* <p>loggedout successfully</p> */}
  </>;
};
