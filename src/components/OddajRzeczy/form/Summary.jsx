import React from "react";
import icon1 from '../../../assets/Icon-1.svg'
import icon4 from '../../../assets/Icon-4.svg'
const Summary = ({showThanks, hideSummary}) => {
    return(
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="summary_title">Podsumowanie Twojej darowizny</p>
                <p className="youGive">Oddajesz:</p>
                <div className="youGive_title_contaniner">
                    <img src={icon1}/>
                    <span className="youGive_things">()</span>
                </div>
                <div className="youGive_title_contaniner">
                    <img src={icon4}/>
                    <span className="youGive_things">Dla lokalizacji: ()</span>
                </div>
                <div className="summary_column_container">
                <div className="summary_column">
                    <p className="youGive">Adres odbioru:</p>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Ulica</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Miasto</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Kod pocztowy</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Numer telefonu</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                </div>
                <div className="summary_column">
                    <p className="youGive">Termin odbioru:</p>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Data</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Godzina</p>
                        <p className="you_give_container_title2">()</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Uwagi <br/> dla kuriera</p>
                        <p className="you_give_container_title2">()</p>
                     </div>
                </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button summary_button" onClick={hideSummary}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button summary_button" onClick={showThanks}>
                        Potwierdzam
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Summary;