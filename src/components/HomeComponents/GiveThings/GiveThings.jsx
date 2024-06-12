import React from "react";
import './GiveThings.scss'
import {Link} from "react-router-dom";
const GiveThings = ({text1, text2, to, hasBorder}) => {

    const borderStyle = hasBorder ? { border: '1px solid #3C3C3C' } : {};

    return(
        <div className="GiveThings">
            <Link to={to}>
                <div className="GiveThings_button" style={borderStyle}>
                    <p>{text1}<br/>{text2}</p>
                </div>
            </Link>
        </div>
    )
}
export default GiveThings;