import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser, signOutAsync } from "../authSlice";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";

function Logout() {

    const dispatch = useDispatch();
    const user = useSelector(selectLoggedInUser);


    useEffect(() => {
        dispatch(signOutAsync())
    })
    return (  
        <>
       {  !user && <Navigate to = '/' replace = {true} ></Navigate>}
       </>
    );
}

export default Logout;