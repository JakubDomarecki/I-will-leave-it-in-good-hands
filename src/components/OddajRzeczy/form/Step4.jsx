import React from "react";

const Step4 = ({showSummary, hideStep4}) => {
    return (
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="step_give">Krok 4/4</p>
                <p className="step_give_desc">Podaj adres oraz termin odbioru rzeczy przez kuriera</p>
                <div className="step4_container">
                    <div className="step4_first_column">
                        <p className="step4_title">Adres odbioru:</p>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Ulica</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Miasto</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Kod pocztowy</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Numer telefonu</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                    </div>
                    <div className="step4_first_column">
                        <p className="step4_title">Termin odbioru:</p>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Data</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Godzina</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input"/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div texarea_label'>
                                <label className="step4_label">Uwagi <br/> dla kuriera</label>
                            </div>
                            <div className='step4_input_div'>
                                <textarea className="step4_input step4_texarea"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button" onClick={hideStep4}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button" onClick={showSummary}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step4