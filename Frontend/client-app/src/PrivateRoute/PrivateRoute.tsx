import React,{FunctionComponent, useState} from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute:FunctionComponent<any> = (props:any) => {
   // to implement in a real state management with redux
    const [auth, setAuth] = useState(false);

    if(!auth) {
        //not logged in so redirect to login page with the return url
        return <Navigate to="/login"/>
    }
  return (
    props.children
  )
}

export default PrivateRoute
