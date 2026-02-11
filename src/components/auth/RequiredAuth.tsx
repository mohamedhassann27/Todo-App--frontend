import { Navigate, Outlet } from "react-router";

function RequiredAuth() {
    const loggedInUserString= localStorage.getItem('loggedInUser')
    const loggedInUser= loggedInUserString? JSON.parse(loggedInUserString): null
    // const loggedin= false;
    return (
        loggedInUser? <Outlet/>: <Navigate to={'/login'}/>
    )
}

export default RequiredAuth
