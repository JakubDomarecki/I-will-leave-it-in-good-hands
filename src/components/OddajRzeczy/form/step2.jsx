import React, { useEffect, useState } from "react";
import arrowUp from "../../../assets/Icon-Arrow-Up.svg";
import arrowDown from "../../../assets/Icon-Arrow-Down.svg";

const Step2 = ({ nextStep, prevStep, handleselectedSelect_step2, existingData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['1', '2', '3', '4', '5'];

    useEffect(() => {
        if (existingData && existingData.length > 0) {
            setSelectedOption(existingData);
        }
    }, [existingData]);

    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleselectedSelect_step2(option);
        setIsOpen(false);
    };

    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 2/4</p>
                <p className="step_give_desc">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                <div className="step2_container">
                    <label className="step2_title">Liczba 60l worków:</label>
                    <div className="custom-select" onClick={toggleDropdown}>
                        <div className="custom-select-trigger">
                            {selectedOption ? selectedOption : '— wybierz —'}
                            {isOpen ? <img src={arrowUp} alt="Arrow Up" /> : <img src={arrowDown} alt="Arrow Down" />}
                        </div>
                        {isOpen && (
                            <div className="custom-options custom-options_step2">
                                {options.map(option => (
                                    <div
                                        key={option}
                                        className="custom-option custom-options_step2"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button" onClick={prevStep}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button" onClick={nextStep}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Step2;
