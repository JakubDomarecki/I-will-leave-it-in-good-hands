import React from "react";
import "./GiveThings.scss";
import { Link } from "react-router-dom";
const GiveThings = ({ text1, text2, to }) => {
  return (
    <div className="GiveThings">
      <Link to={to}>
        <div className="GiveThings_button">
          <p>
            {text1}
            <br />
            {text2}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default GiveThings;
