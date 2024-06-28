import React, {useState, useEffect} from "react";
import './OddajRzeczyForm.scss'
import logout from "../../Logout/Logout.jsx";

const Step1 = ({nextStep,handleSelectedChecbkboxes, existingData}) => {

    const [selected, setSelected] = useState([])
    const [checkboxes, setCheckboxes] = useState(['ubrania, które nadają się do ponownego użycia','ubrania, do wyrzucenia','zabawki', 'książki','inne'])


    useEffect(() => {
        if (existingData) {
            setSelected(existingData);
        }
    }, []);

    const handleSelectedCheckbox = (checkbox) => {
        setSelected(prevState => {
            const newSelectedChecboxes = prevState.includes(checkbox)
                ? prevState.filter(item => item !== checkbox)
                : [...prevState, checkbox];

            handleSelectedChecbkboxes(newSelectedChecboxes)
            return newSelectedChecboxes;
        });
    };


    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 1/4</p>
                <p className="step_give_desc">Zaznacz co chcesz oddać:</p>

                <div className="checkobxes">
                    {checkboxes.map(checkbox => (
                        <div className="single_checkbox" key={checkbox}>
                            <input key={checkbox} type="checkbox" className="step_1_checkbox" value={selected}
                                   onChange={e => handleSelectedCheckbox(checkbox)} checked={selected.includes(checkbox)}/>
                            <label>{checkbox}</label>
                        </div>
                    ))}
                </div>
                <div>
                    <button className="OddajRzeczyForm_button button_step1" onClick={nextStep}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step1;