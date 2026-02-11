import { Route, Routes } from "react-router"
import RootLayout from "../layout/RootLayout"
import LoginPage from "../pages/Login"
import RegiserPage from "../pages/Register"
import RequiredAuth from "../components/auth/RequiredAuth"
import PageNotFound from "../pages/PageNotFound"
import Todos from "../pages/Todos"
import AllTodos from "../pages/AllTodos"

function Router() {
    return (
        <Routes>

            <Route path="/" element={<RootLayout/>}>
                <Route element={<RequiredAuth/>}>
                    <Route index element={<Todos/>}/>
                    <Route path="/profile" element={<AllTodos/>}/>
                </Route>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/register" element={<RegiserPage/>}/>
            </Route>
            <Route path="*" element={<PageNotFound/>}/>

        </Routes>
    )
}

export default Router
