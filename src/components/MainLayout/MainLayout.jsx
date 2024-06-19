import React, {useState} from "react";
import './MainLayout.scss'
import {Link, Outlet} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'
import {signOut, auth} from "../firebaseConfig.js";
import {useLogin} from "../Context.jsx";
const MainLayout = () => {

    const {user, logout} = useLogin();
    
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('Wylogowanie zakończone powodzeniem');
                logout();
            })
            .catch((error) => {
                console.error('Błąd podczas wylogowywania:', error);
            });
    };

    return(
        <header>
            <div className="container">
                { user ? (
                    <div className="login_nav">
                        <ul className="nav">
                            <li className="login-item">
                                <Link to="">Cześć {user.email}</Link>
                            </li>
                            <li className="login-item register">
                                <Link to="/Oddaj-rzeczy">Oddaj rzeczy</Link>
                            </li>
                            <li className="login-item">
                                <Link to="/logout" onClick={handleLogout}>Wyloguj</Link>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="login_nav">
                        <ul className="nav">
                            <li className="login-item">
                                <Link to="/login">Zaloguj</Link>
                            </li>
                            <li className="login-item register">
                                <Link to="/register">Załóż konto</Link>
                            </li>
                        </ul>
                    </div>
                )
                }
                <div className="login_nav">
                    <ul className="nav">
                        <li className="nav_link start">
                            <LinkScroll to="start" smooth={true} duration={500}>Start</LinkScroll>
                        </li>
                        <li className="nav_link">
                            <LinkScroll to="tricks" smooth={true} duration={500}>O co chodzi?</LinkScroll>
                        </li>
                        <li className="nav_link">
                            <LinkScroll to="AboutUs" smooth={true} duration={500}>O nas?</LinkScroll>
                        </li>
                        <li className="nav_link">
                            <LinkScroll to="orgnizations" smooth={true} duration={500}>Fundacja i
                                organizacje</LinkScroll>
                        </li>
                        <li className="nav_link">
                            <LinkScroll to="contact" smooth={true} duration={500}>Kontakt</LinkScroll>
                        </li>
                    </ul>
                </div>
            </div>
            <Outlet/>
        </header>
    )
}
export default MainLayout;