import React from "react";
import {createRoot} from "react-dom/client";
import './scss/main.scss';
import Home from "./components/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import MainLayout from "./components/MainLayout/MainLayout.jsx";
import Logout from "./components/Logout/Logout.jsx";
import OddajRzeczy from "./components/OddajRzeczy/OddajRzeczy.jsx";
import {LoginFunction, useLogin} from "./components/Context.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";

const App = () => {

    return(
        <LoginFunction>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout/>}>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/login' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/logout' element={<Logout/>}/>
                        <Route path='/Oddaj-rzeczy' element={
                            <PrivateRoute>
                                <OddajRzeczy/>
                            </PrivateRoute>
                        }/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </LoginFunction>
    );
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>)