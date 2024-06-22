import React, {useEffect, useState} from "react";
import './Step3.scss'
import arrowUp from '../../../assets/Icon-Arrow-Up.svg'
import arrowDown from '../../../assets/Icon-Arrow-Down.svg'

const Step3 = ({nextStep,prevStep,handleselectedSelect_step3,handleselectedSelectDiv, handlInputValue3, existingData1, existingData2, existingData3}) => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const options = ['Poznań', 'Warszawa', 'Kraków', 'Wrocław', 'Katowice'];

    const [divs, setDivs] = useState(['dzieciom', 'samotnym matkom', 'bezdomnym', 'niepełnosprawnym', 'osobom starszym'])
    const [selectedDivs, setSelectedDivs] = useState([])
    const [inputValue, setInputValue] = useState("")

    useEffect(() => {
        if (existingData1 && existingData1.length > 0) {
            setSelectedOption(existingData1);
        }
    }, [existingData1]);

    useEffect(() => {
        if (existingData2) {
            setSelectedDivs(existingData2);
        }
    }, []);

    useEffect(() => {
        if (existingData3) {
            setInputValue(existingData3);
        }
    }, []);


    const toggleDropdown = () => setIsOpen(!isOpen);
    const handleOptionClick = (option) => {
        setSelectedOption(option);
        handleselectedSelect_step3(option)
        setIsOpen(false);
    };


    const handleDivClick = (div) => {
        setSelectedDivs(prevState => {
            const newSelectedDivs = prevState.includes(div)
                ? prevState.filter(divIndex => divIndex !== div)
                : [...prevState, div];
            handleselectedSelectDiv(newSelectedDivs);
            return newSelectedDivs;
        });
    }

    const handleInputValue = (e) => {
        setInputValue(e.target.value)
        handlInputValue3(e)
    }


    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 3/4</p>

                    <h2 className="location_title">Lokalizacja:</h2>
                    <div className="custom-select" onClick={toggleDropdown}>
                        <div className="custom-select-trigger">
                            {selectedOption ? selectedOption : '— wybierz —'}
                            {isOpen ? <img src={arrowUp}/> : <img src={arrowDown}/>}
                        </div>
                        {isOpen && (
                            <div className="custom-options">
                                {options.map(option => (
                                    <div
                                        key={option}
                                        className="custom-option"
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                <div className="WhoHelp">
                    <h3>Komu chcesz pomóc?</h3>
                    <div className="Help_boxes">
                        {divs.map((div) => (
                            <div
                                key={div}
                                className={`Help_box ${selectedDivs.includes(div) ? 'selectedDiv' : ''}`}
                                onClick={() => handleDivClick(div)}
                            >
                                {div}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="organization_input_title">
                    <h3 className="organization_input_title_desc">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input type="text" className="oganization_input" value={inputValue} onChange={handleInputValue}/>
                </div>

                <div>
                    <button className="OddajRzeczyForm_button step3_button" onClick={prevStep}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button step3_button" onClick={nextStep}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step3;