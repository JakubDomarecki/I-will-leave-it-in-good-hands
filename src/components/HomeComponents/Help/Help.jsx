import React from "react";
import './help.scss'
import decoration from '../../../assets/Decoration.svg'
import Login from "../../login/login.jsx";
import GiveThings from "../GiveThings/GiveThings.jsx";
import {Outlet} from "react-router-dom";
import {Element} from "react-scroll";
const Help = () => {
    return(
        <Element name="orgnizations">
        <div className="help">
            <p className="help_title">Komu pomagamy?</p>
            <img src={decoration}/>
            <div className="help_buttons">
                <GiveThings text1="Fundacjom" hasBorder={true} to={"/"}/>
                <GiveThings text1="Organizacjom" text2="porządkowym" hasBorder={false}/>
                <GiveThings text1="Lokalnym" text2="zbiórkom" hasBorder={false}/>
            </div>
        </div>
        </Element>
    )
}
export default Help;