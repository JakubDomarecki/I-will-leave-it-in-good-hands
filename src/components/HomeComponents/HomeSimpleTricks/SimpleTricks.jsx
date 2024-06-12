import React from "react";
import decoration from '../../../assets/Decoration.svg'
import './SimpleTricks.scss'
import {Element} from "react-scroll";
import icon1 from '../../../assets/Icon-1.svg'
import icon2 from '../../../assets/Icon-2.svg'
import icon3 from '../../../assets/Icon-3.svg'
import icon4 from '../../../assets/Icon-4.svg'

const SimpleTricks = () => {
return(
    <Element name="tricks">
        <div className="SimpleTricksHeader">
            <p className="SimpleTricks_Tittle">Wystarczą 4 proste kroki</p>
            <img src={decoration}/>
        </div>
        <div className="simpleSteps">
            <div className="StepsContainer">
                <div className="steps">
                     <div className="step">
                        <img src={icon1}/>
                        <p className="step_title">Wybierz rzeczy</p>
                        <p>ubrania, zabawki, sprzęt i inne</p>
                     </div>
                    <div className="step">
                        <img src={icon2}/>
                        <p className="step_title">Spakuj je</p>
                        <p>skorzystaj z worków na śmieci</p>
                    </div>
                    <div className="step">
                        <img src={icon3}/>
                        <p className="step_title">Zdecyduj komu checsz pomóc</p>
                        <p>wybierz zaufane miejsce</p>
                    </div>
                    <div className="step">
                        <img src={icon4}/>
                        <p className="step_title">Zamów kuriera</p>
                        <p>kurier przyjedzie <br/> w dogodnym terminie</p>
                    </div>
                </div>
            </div>
        </div>
    </Element>
)
}
export default SimpleTricks;