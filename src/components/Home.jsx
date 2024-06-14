import React from "react";
import HomeHeader from "./HomeComponents/HomeHeader/HomeHeader.jsx";
import HomeThreeColumns from "./HomeComponents/HomeThreeColumns/HomeThreeColumns.jsx";
import SimpleTricks from "./HomeComponents/HomeSimpleTricks/SimpleTricks.jsx";
import GiveThings from "./HomeComponents/GiveThings/GiveThings.jsx";
import AboutUs from "./HomeComponents/AboutUs/AboutUs.jsx";
import Contact from "./HomeComponents/Contact/Contact.jsx";
import Help from "./HomeComponents/Help/Help.jsx";

const Home = () => {
    return(
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <SimpleTricks/>
            <GiveThings text1={"ODDAJ"} text2={"RZECZY"} to={"/Login"}/>
            <AboutUs/>
            <Help/>
            <Contact/>
        </>
    )
}
export default Home;