import React, {useState} from "react";
import './OddajRzeczyForm.scss'
import Step1 from "./step1.jsx";
import Step2 from "./step2.jsx";
import Step3 from "./step3.jsx";
import Step4 from "./Step4.jsx";
import Summary from "./Summary.jsx";
import ThankYou from "./ThankYou.jsx";

const OddajRzeczyForm = () => {

    const [currentStep, setCurrentStep] = useState(1);

    const [SelectedCheckboxes, setSelectedCheckboxes] = useState([])
    const [selectedSelect_step2, setSelectedSelect_step2] = useState([])
    const [selectedSelect_step3, setSelectedSelect_step3] = useState([])
    const [selectedDiv, setSelectedDiv] = useState([])
    const [input_step3, setInput_step3] = useState("")
    const [formData, setFormData] = useState();

    const handleSelectedChecbkboxes = (newSelectedChecboxes)=> {
        setSelectedCheckboxes(newSelectedChecboxes)
    }
    const handleselectedSelect_step2 = (select_step2) => {
        setSelectedSelect_step2(select_step2)
    }
    const handleselectedSelect_step3 = (select_step3) => {
        setSelectedSelect_step3(select_step3)
    }
    const handleselectedSelectDiv = (selectDiv) => {
        setSelectedDiv(selectDiv)
    }
    const handlInputValue3 = (e) => {
        setInput_step3(e.target.value)
    }
    const handleFormData = (data) => {
        setFormData(data);
    };



    const nextStep = () => setCurrentStep(prevStep => prevStep + 1);
    const prevStep = () => setCurrentStep(prevStep => prevStep - 1);



    return (
        <>
            {currentStep === 1 && <Step1 nextStep={nextStep} handleSelectedChecbkboxes={handleSelectedChecbkboxes} existingData={SelectedCheckboxes}/>}
            {currentStep === 2 && <Step2  nextStep={nextStep} prevStep={prevStep} handleselectedSelect_step2={handleselectedSelect_step2} existingData={selectedSelect_step2}/>}
            {currentStep === 3 && <Step3
                nextStep={nextStep}
                prevStep={prevStep}
                handleselectedSelect_step3={handleselectedSelect_step3}
                handleselectedSelectDiv={handleselectedSelectDiv}
                handlInputValue3={handlInputValue3}
                existingData1={selectedSelect_step3}
                existingData2={selectedDiv}
                existingData3={input_step3}

            />}
            {currentStep === 4 && <Step4  nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} existingData={formData}/>}
            {currentStep === 5 && <Summary
                nextStep={nextStep}
                prevStep={prevStep}
                SelectedCheckboxes={SelectedCheckboxes}
                selectedSelect_step2={selectedSelect_step2}
                selectedSelect_step3={selectedSelect_step3}
                selectedDiv={selectedDiv}
                input_step3={input_step3}
                formData={formData}
            />}
            {currentStep === 6 && <ThankYou />}
        </>
    );
}
export default OddajRzeczyForm
