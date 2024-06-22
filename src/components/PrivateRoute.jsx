import React from "react";
import {useLogin} from "./Context.jsx";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useLogin();

    return(
         user ? children : <Navigate to="/login" />
    )
}
export default PrivateRoute;