import React,{FunctionComponent} from 'react'
import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';



const PrivateRoute:FunctionComponent<any> = (props:any) => {
// to implement in a real state management with redux
    const {user, logged} = useSelector((state:any) => state.auth);
     
   if(!logged) {
        //not logged in so redirect to login page with the return url
        return <Navigate to="/login"/>
    }
  return (
    props.children
  )
}

export default PrivateRoute
