import React, {useState} from "react";
import './OddajRzeczyForm.scss'
import Step1 from "./step1.jsx";
import Step2 from "./step2.jsx";
import Step3 from "./step3.jsx";
import Step4 from "./Step4.jsx";
import Summary from "./Summary.jsx";
import ThankYou from "./ThankYou.jsx";

const OddajRzeczyForm = () => {
    const [showStep1, setShowStep1] = useState(true)
    const [showStep2, setShowStep2] = useState(false)
    const [showStep3, setShowStep3] = useState(false)
    const [showStep4, setShowStep4] = useState(false)
    const [showSummary, setShowSummary] = useState(false)
    const [showThanks, setShowThanks] = useState(false)

    const handleShowStep2 = () => {
        setShowStep1(false)
        setShowStep2(true)
    }

    const handleShowStep3 = () => {
        setShowStep2(false)
        setShowStep3(true)
    }

    const handleShowStep4 = () => {
        setShowStep3(false)
        setShowStep4(true)
    }

    const handleShowSummary = () => {
        setShowStep4(false)
        setShowSummary(true)
    }

    const handleShowThanks = () => {
        setShowSummary(false)
        setShowThanks(true)
    }

    //hide
    const handleHideStep2 = () => {
        setShowStep2(false)
        setShowStep1(true)
    }

    const handleHideStep3 = () => {
        setShowStep2(true)
        setShowStep3(false)
    }

    const handleHideStep4 = () => {
        setShowStep3(true)
        setShowStep4(false)
    }

    const handleHideSummary = () => {
        setShowStep4(true)
        setShowSummary(false)
    }



    return(
        <>
            {showStep1 && <Step1 showStep2={handleShowStep2}/>}
            {showStep2 &&  <Step2 showStep3={handleShowStep3} hideStep2={handleHideStep2}/>}
            {showStep3 &&  <Step3 showStep4={handleShowStep4} hideStep3={handleHideStep3}/>}
            {showStep4 &&  <Step4 showSummary={handleShowSummary} hideStep4={handleHideStep4}/>}
            {showSummary && <Summary showThanks={handleShowThanks} hideSummary={handleHideSummary}/>}
            {showThanks && <ThankYou/>}
        </>
    )
}
export default OddajRzeczyForm
