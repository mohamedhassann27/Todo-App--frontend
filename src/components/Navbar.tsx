import toast, { Toaster } from "react-hot-toast";
import { NavLink } from "react-router";

const Navbar = () => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const loggedInUser = loggedInUserString ? JSON.parse(loggedInUserString) : null;
    console.log(loggedInUser);
    
    const onLogout= ()=>{
        localStorage.removeItem('loggedInUser')
        toast('See you soon', {icon: '👋',});
        setTimeout(() => {
            location.replace('/login')
        }, 1500);
    }

    return (
        <nav className="bg-indigo-700 flex px-5 py-4 justify-between items-center rounded-sm">
            <NavLink to={"/"}>Home</NavLink>
            {loggedInUser ? (
                <ul className="flex gap-10">
                    <li><NavLink to={'/profile'}>Todos</NavLink></li>
                    <li onClick={onLogout} className="cursor-pointer">Logout</li>
                </ul>
            ) : (
                <ul className="flex gap-10">
                    <li><NavLink to={"/register"}>Register</NavLink></li>
                    <li><NavLink to={"/login"}>Login</NavLink></li>
                </ul>
            )}
            <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
        </nav>

        
    );
};

export default Navbar;
