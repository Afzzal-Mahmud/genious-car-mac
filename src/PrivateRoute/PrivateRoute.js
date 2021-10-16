import React from "react";
import { Route, Redirect } from "react-router-dom";
import useAuth from '../Hooks/useAuth';

function PrivateRoute({children,...rest}) {
    const {user} = useAuth()
    return(
        <Route
        {...rest}
        render={({location})=>user.email ? children 
        :<Redirect 
        to={
            {
                pathname:'/login',
                state:{from : location}
            }
        }
        ></Redirect>}
       >

       </Route>
    )
}
export default PrivateRoute;















/* amra children ke dekhabo baki rest ke rout er modde patai dibo */
    /* 
    1 / render korbo children ke jodi logIn kora thake na hole 
    2 / Redirect korbo login page a 
    */
/* we use too much information on UseAuth function so we only use the user information by distructuring UseAuth function */