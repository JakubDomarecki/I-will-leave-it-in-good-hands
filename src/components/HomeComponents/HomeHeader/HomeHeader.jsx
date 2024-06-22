import React from "react";
import './HomeHeader.scss'
import logo from '../../../assets/Home-Hero-Image.jpg'
import decoration from '../../../assets/Decoration.svg'
import {Element, Link as LinkScroll} from "react-scroll";
import GiveThings from "../GiveThings/GiveThings.jsx";
import {useLogin} from "../../Context.jsx";

const HomeHeader = () => {

    const {user} = useLogin();

    return (
        <Element to="start">
        <div className="StartingPage">
            <div className="StartingPage_image">
                <img src={logo} className="starting_image"/>
            </div>
            <div className="header_description">
                <div className="description">
                    <p className="header_description_p">Zacznij pomagać! <br/>Oddaj niechciane rzeczy w zaufane ręce</p>
                    <img src={decoration} className="header_img"/>
                    <div className="boxes">
                        <GiveThings text1={"ODDAJ"} text2={"RZECZY"} to={user ? "/oddaj-rzeczy" : '/login'}/>
                        <GiveThings text1={"ZORGANIZUJ"} text2={"ZBIÓRKĘ"}/>
                    </div>
                </div>
            </div>
        </div>
        </Element>
    )
};
export default HomeHeader;
