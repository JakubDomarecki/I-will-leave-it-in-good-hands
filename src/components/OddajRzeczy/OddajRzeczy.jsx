import React from "react";
import formImg from '../../assets/Form-Hero-Image.jpg'
import decoration from "../../assets/Decoration.svg";
import './OddajRzeczy.scss'
import Contact from "../HomeComponents/Contact/Contact.jsx";
import OddajRzeczyForm from "./form/OddajRzeczyForm.jsx";
const OddajRzeczy = () => {
    return (
        <>
        <div className="FormPage">
            <div className="FormPage_image">
                <img src={formImg} className="form_image"/>
            </div>
            <div className="FormPage_description">
                <div className="description_Form">
                    <p className="header_description_p form_title">Oddaj rzeczy, których już nie chcesz POTRZEBUJĄCYM</p>
                    <img src={decoration} className="header_img"/>
                    <div>
                        <p className="form_4steps">Wystarczą 4 proste kroki:</p>
                    </div>
                    <div className="diamond-container">
                        <div className="diamond">
                            <div className="diamond-content">
                                <span className="number">1</span>
                                <span>Wybierz rzeczy</span>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-content">
                                <span className="number">2</span>
                                <span>Spakuj je w worki</span>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-content">
                                <span className="number">3</span>
                                <span>Wybierz fundację</span>
                            </div>
                        </div>
                        <div className="diamond">
                            <div className="diamond-content">
                                <span className="number">4</span>
                                <span>Zamów kuriera</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="form_notification">
                <div className="container">
                    <h2>Ważne!</h2>
                    <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je
                        przekazać.</p>
                </div>
            </div>
            <OddajRzeczyForm/>
            <Contact/>


        </>
    )
}

export default OddajRzeczy;