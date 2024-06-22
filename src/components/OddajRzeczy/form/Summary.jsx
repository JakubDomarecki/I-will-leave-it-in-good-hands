import React from "react";
import icon1 from '../../../assets/Icon-1.svg'
import icon4 from '../../../assets/Icon-4.svg'
const Summary = ({nextStep, prevStep, SelectedCheckboxes,selectedSelect_step2, selectedSelect_step3,selectedDiv, input_step3,formData}) => {

    const Worki_text = (selectedSelect_step2) => {
        let word
        if (selectedSelect_step2 === '1') {
            word = 'worek'
        } else if (selectedSelect_step2 === '5') {
            word = 'worków'
        } else {
            word = 'worki'
        }
        return word
    }

    return(
        <div className="OddajRzeczyForm">
            <div className="container">
                <p className="summary_title">Podsumowanie Twojej darowizny</p>
                <p className="youGive">Oddajesz:</p>
                <div className="youGive_title_contaniner">
                    <img src={icon1}/>
                    <span className="youGive_things">{selectedSelect_step2} {Worki_text(selectedSelect_step2)} , {SelectedCheckboxes.join(", ")}, {selectedDiv.join(", ")}, {input_step3}</span>
                </div>
                <div className="youGive_title_contaniner">
                    <img src={icon4}/>
                    <span className="youGive_things">Dla lokalizacji: {selectedSelect_step3}</span>
                </div>
                <div className="summary_column_container">
                <div className="summary_column">
                    <p className="youGive">Adres odbioru:</p>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Ulica</p>
                        <p className="you_give_container_title2">{formData.street}</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Miasto</p>
                        <p className="you_give_container_title2">{formData.city}</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Kod pocztowy</p>
                        <p className="you_give_container_title2">{formData.postalCode}</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Numer telefonu</p>
                        <p className="you_give_container_title2">{formData.phoneNumber}</p>
                    </div>
                </div>
                <div className="summary_column">
                    <p className="youGive">Termin odbioru:</p>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Data</p>
                        <p className="you_give_container_title2">{formData.pickupDate}</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Godzina</p>
                        <p className="you_give_container_title2">{formData.pickupTime}</p>
                    </div>
                    <div className="you_give_container">
                        <p className="you_give_container_title">Uwagi <br/> dla kuriera</p>
                        <p className="you_give_container_title2">{formData.additionalNotes}</p>
                     </div>
                </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button summary_button" onClick={prevStep}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button summary_button" onClick={nextStep}>
                        Potwierdzam
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Summary;