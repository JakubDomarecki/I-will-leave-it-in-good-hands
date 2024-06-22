import React, {useState, useEffect} from "react";

const Step4 = ({nextStep, prevStep, handleFormData, existingData}) => {

    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [pickupTime, setPickupTime] = useState("");
    const [additionalNotes, setAdditionalNotes] = useState("");

    useEffect(() => {
        if (existingData) {
            setStreet(existingData.street);
            setCity(existingData.city);
            setPostalCode(existingData.postalCode);
            setPhoneNumber(existingData.phoneNumber);
            setPickupDate(existingData.pickupDate);
            setPickupTime(existingData.pickupTime);
            setAdditionalNotes(existingData.additionalNotes);
        }
    }, []);


    const handleNext = () => {
        const formData = {
            street,
            city,
            postalCode,
            phoneNumber,
            pickupDate,
            pickupTime,
            additionalNotes
        };

        handleFormData(formData)
        nextStep()
    }


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
                                <input type="text" className="step4_input" value={street} onChange={(e) => setStreet(e.target.value)}/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Miasto</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input" value={city} onChange={(e) => setCity(e.target.value)}/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Kod pocztowy</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input" value={postalCode} onChange={(e) => setPostalCode(e.target.value)}/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Numer telefonu</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="text" className="step4_input" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
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
                                <input type="date" className="step4_input" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)}/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div'>
                                <label className="step4_label">Godzina</label>
                            </div>
                            <div className='step4_input_div'>
                                <input type="time" className="step4_input" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)}/>
                            </div>
                        </div>
                        <div className="step4_single_input">
                            <div className='step4_label_div texarea_label'>
                                <label className="step4_label">Uwagi <br/> dla kuriera</label>
                            </div>
                            <div className='step4_input_div'>
                                <textarea className="step4_input step4_texarea" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)}></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="OddajRzeczyForm_button" onClick={prevStep}>
                        Wstecz
                    </button>
                    <button className="OddajRzeczyForm_button" onClick={handleNext}>
                        Dalej
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Step4