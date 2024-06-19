import React from "react";
import decoration from '../../../assets/Decoration.svg'
const ThankYou = () => {
    return (
        <div className="OddajRzeczyForm">
            <div className="container thankYou_container">
                <p className="thankYou_desc">Dziękujemy za przesłanie formularza Na maila prześlemy wszelkie informacje o odbiorze.</p>
                <img src={decoration}/>
            </div>
        </div>
    )
}
export default ThankYou;