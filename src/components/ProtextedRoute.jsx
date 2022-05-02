import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AuthContext} from"../contexts/authContext"

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
    const {isAuth} = useContext(AuthContext)

    if(!isAuth){
        return <Navigate to="/login" replace={false}></Navigate>
    }
    return children
};
