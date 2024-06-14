import React, {useState} from "react";
import './help.scss'
import decoration from '../../../assets/Decoration.svg'
import {Element} from "react-scroll";
import Options from "./options.jsx";
import {foundationsTable} from "./data/fundations.js";
import {organizationsTable} from "./data/organizations.js";
import {localTable} from "./data/local.js";

const Help = () => {
    const [switchFoundations, setSwitchFoundations] = useState(true)
    const [switchOrganization, setSwitchOrganization] = useState(false)
    const [switchLocal, setSwitchLocal] = useState(false)

    const showOrganizations = () => {
        setSwitchOrganization(true)
        setSwitchFoundations(false)
        setSwitchLocal(false)
    }

    const showFoundations= () => {
        setSwitchOrganization(false)
        setSwitchFoundations(true)
        setSwitchLocal(false)
    }
    const showLocal = () => {
        setSwitchOrganization(false)
        setSwitchLocal(true)
        setSwitchFoundations(false)
    }
    
    
    return(
        <Element name="orgnizations">
        <div className="help">
            <p className="help_title">Komu pomagamy?</p>
            <img src={decoration}/>
            <div className="help_buttons">
                <button className={`help_button ${switchFoundations ? 'active' : ''} `} onClick={showFoundations}>Fundacjom</button>
                <button className={`help_button ${switchOrganization ? 'active' : ''}`} onClick={showOrganizations}>Organizacjom pozarządowym</button>
                <button className={`help_button ${switchLocal ? 'active' : ''}`} onClick={showLocal}>Lokalnym zbiórkom</button>
            </div>
            {switchFoundations && <Options data={foundationsTable} text={"W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują."}/>}
            {switchOrganization &&<Options data={organizationsTable} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}/>}
            {switchLocal &&<Options data={localTable} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."}/>}
        </div>
        </Element>

    )
}
export default Help;