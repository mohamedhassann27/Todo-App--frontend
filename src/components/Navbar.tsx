// import toast, { Toaster } from "react-hot-toast";
// import { NavLink } from "react-router";

// const Navbar = () => {
//     const loggedInUserString = localStorage.getItem("loggedInUser");
//     const loggedInUser = loggedInUserString ? JSON.parse(loggedInUserString) : null;
//     console.log(loggedInUser);
    
//     const onLogout= ()=>{
//         localStorage.removeItem('loggedInUser')
//         toast('See you soon', {icon: '👋',});
//         setTimeout(() => {
//             location.replace('/login')
//         }, 1500);
//     }

//     return (
//         <nav className="bg-indigo-700 flex px-5 py-4 justify-between items-center rounded-sm">
//             <NavLink to={"/"}>Home</NavLink>
//             {loggedInUser ? (
//                 <ul className="flex gap-10">
//                     <li><NavLink to={'/profile'}>Todos</NavLink></li>
//                     <li onClick={onLogout} className="cursor-pointer">Logout</li>
//                 </ul>
//             ) : (
//                 <ul className="flex gap-10">
//                     <li><NavLink to={"/register"}>Register</NavLink></li>
//                     <li><NavLink to={"/login"}>Login</NavLink></li>
//                 </ul>
//             )}
//             <Toaster
//                     position="top-center"
//                     reverseOrder={false}
//                 />
//         </nav>

        
//     );
// };

// export default Navbar;






// -----------------------Update UI only with claud-----------------------



import toast, { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router';

const Navbar = () => {
    const loggedInUserString = localStorage.getItem('loggedInUser');
    const loggedInUser = loggedInUserString ? JSON.parse(loggedInUserString) : null;

    const onLogout = () => {
        localStorage.removeItem('loggedInUser');
        toast.success('See you soon! 👋');
        setTimeout(() => location.replace('/login'), 1500);
    };

    return (
        <>
        <nav className="bg-slate-900/80 backdrop-blur-xl border-b border-slate-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-16">
                
                {/* Logo/Brand */}
                <NavLink 
                to="/" 
                className="flex items-center gap-2 group"
                >
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity rounded-lg"></div>
                    <div className="relative bg-linear-to-r from-blue-500 to-purple-500 p-2 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                    </div>
                </div>
                <span className="text-xl font-bold bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    TodoApp
                </span>
                </NavLink>

                {/* Navigation Links */}
                {loggedInUser ? (
                <div className="flex items-center gap-3">
                    <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isActive
                            ? 'bg-blue-500/10 text-blue-400 shadow-lg shadow-blue-500/25'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`
                    }
                    >
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        My Todos
                    </div>
                    </NavLink>
                    
                    <button
                    onClick={onLogout}
                    className="px-4 py-2 rounded-lg font-medium text-sm text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 flex items-center gap-2 cursor-pointer"
                    >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Logout
                    </button>
                </div>
                ) : (
                <div className="flex items-center gap-3">
                    <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        `px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                        isActive
                            ? 'bg-purple-500/10 text-purple-400'
                            : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                        }`
                    }
                    >
                    Sign up
                    </NavLink>
                    
                    <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        `relative group ${
                        isActive ? 'pointer-events-none' : ''
                        }`
                    }
                    >
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                    <div className="relative bg-linear-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg font-medium text-sm text-white transition-all duration-200">
                        Sign in
                    </div>
                    </NavLink>
                </div>
                )}

            </div>
            </div>
        </nav>

        <Toaster
            position="top-center"
            toastOptions={{
            className: 'backdrop-blur-xl',
            style: {
                background: 'rgba(30, 41, 59, 0.9)',
                color: '#e2e8f0',
                border: '1px solid rgba(71, 85, 105, 0.5)',
                borderRadius: '12px',
                padding: '12px 20px',
            },
            }}
        />
        </>
    );
};

export default Navbar;