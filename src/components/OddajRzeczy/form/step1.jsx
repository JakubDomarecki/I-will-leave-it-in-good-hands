import React from "react";
import './OddajRzeczyForm.scss'

const Step1 = ({showStep2}) => {

    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 1/4</p>
                <p className="step_give_desc">Zaznacz co chcesz oddać:</p>
                <div className="checkobxes">

                    <div className="single_checkbox">
                        <input type="checkbox" className="step_1_checkbox"/>
                        <label>ubrania, które nadają się do ponownego użycia</label>
                    </div>
                    <div className="single_checkbox">
                        <input type="checkbox" className="step_1_checkbox"/>
                        <label>ubrania, do wyrzucenia</label>
                    </div>
                    <div className="single_checkbox">
                        <input type="checkbox" className="step_1_checkbox"/>
                        <label>zabawki</label>
                    </div>
                    <div className="single_checkbox">
                        <input type="checkbox" className="step_1_checkbox"/>
                        <label>książki</label>
                    </div>
                    <div className="single_checkbox">
                        <input type="checkbox" className="step_1_checkbox"/>
                        <label>Inne</label>
                    </div>
                    <div>
                        <button className="OddajRzeczyForm_button" onClick={showStep2}>
                            Dalej
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Step1;