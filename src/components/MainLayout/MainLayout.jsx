import React from "react";
import './MainLayout.scss'
import {Link, Outlet} from "react-router-dom";
import {Link as LinkScroll} from 'react-scroll'

const MainLayout = () => {
    return(
        <header>
            <div className="container">
                <div className="login_nav">
                    <ul className="nav">
                        <li className="login-item">
                        <Link to="/Login">Zaloguj</Link>
                        </li>
                        <li className="login-item register">
                         <Link to="/register">Załóż konto</Link>
                        </li>
                    </ul>
               </div>
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
                         <LinkScroll to="orgnizations" smooth={true} duration={500}>Fundacja i organizacje</LinkScroll>
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