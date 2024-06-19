import React from "react";

const Step3 = ({showStep4,hideStep3}) => {
    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 3/4</p>

                <div className="location">
                    <h2  className="location_title">Lokalizacja:</h2>
                      <div className="custom-select">
                        <select className="step2_select">
                            <option value="" disabled selected>— wybierz —</option>
                            <option value="Poznań">Poznań</option>
                            <option value="Warszawa">Warszawa</option>
                            <option value="Kraków">Kraków</option>
                            <option value="Wrocław">Wrocław</option>
                            <option value="Katowice">Katowice</option>
                        </select>
                      </div>
                </div>

                <div className="WhoHelp">
                    <h3>Komu chcesz pomóc?</h3>
                </div>

                <div className="organization_input_title">
                    <h3 className="organization_input_title_desc">Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
                    <input type="text" className="oganization_input"/>
                </div>

                <div>
                    <button className="OddajRzeczyForm_button" onClick={hideStep3}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button" onClick={showStep4}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step3;