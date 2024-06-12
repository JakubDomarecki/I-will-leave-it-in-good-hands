import React from "react";
import './HomeThreeColumns.scss'
import {Element} from "react-scroll";

const HomeThreeColumns = () => {
    return(
        <div className="ThreeColumns">
            <div className="container">
                <div className="informations">
                    <div className="single_information">
                        <p className="information_number">10</p>
                        <p className="information_title">ODDANYCH WORKÓW</p>
                        <p className="information_description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="single_information">
                        <p className="information_number">5</p>
                        <p className="information_title">WSPARTYCH ORGNIAZACJI</p>
                        <p className="information_description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.</p>
                    </div>
                    <div className="single_information">
                        <p className="information_number">7</p>
                        <p className="information_title">ZORGANIZOWANYCH ZBIÓREK</p>
                        <p className="information_description">Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra
                            elementuma. Aliquam erat volutpat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeThreeColumns;