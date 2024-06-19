import React from "react";

const Step2 = ({showStep3,hideStep2}) => {
    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 2/4</p>
                <p className="step_give_desc">Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</p>
                <div className="step2_container">
                    <label className="step_2_title">Liczba 60l worków:</label>
                    <div className="custom-select">
                        <select className="step2_select">
                            <option value="" disabled selected>— wybierz —</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button" onClick={hideStep2}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button" onClick={showStep3}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step2