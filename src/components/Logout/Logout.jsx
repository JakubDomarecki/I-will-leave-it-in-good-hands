import React from "react";
import './logout.scss'
import decoration from "../../assets/Decoration.svg";
import GiveThings from "../HomeComponents/GiveThings/GiveThings.jsx";
const Logout = () => {
    return (
        <div className="logout">
            <p className="logout_title">Wylogowanie nastąpiło Pomyślnie</p>
            <img src={decoration}/>
            <GiveThings text1="Strona" text2="głowna" hasBorder={true} to="/"/>
        </div>
    )
}
export default Logout;