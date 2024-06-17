import React, {useState} from "react";
import decoration from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";

const Register = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')

    const [passwordMessage, setPasswordMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")
    const [passwordRepeatMessage, setPasswordRepeatMessage] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        let valid = true;

        if (!re.test(email)) {
            setEmailMessage("Podany email jest nieprawidłowy!");
            valid = false;
        } else {
            setEmailMessage("");
        }

        if (password.length < 6) {
            setPasswordMessage('Hasło jest za krótkie!');
            valid = false;
        } else {
            setPasswordMessage('');
        }

        if (password !== passwordRepeat || passwordRepeat.length < 6) {
            if (password !== passwordRepeat) {
                setPasswordRepeatMessage('Hasła nie są takie same!');
            } else {
                setPasswordRepeatMessage('Hasło powtórzone jest za krótkie!');
            }
            valid = false;
        } else {
            setPasswordRepeatMessage('');
        }

        if (valid) {
            setEmail("");
            setPassword("");
            setPasswordRepeat("");

        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (emailMessage) {
            setEmailMessage("");
        }
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (passwordMessage) {
            setPasswordMessage("");
        }
    }

    const handlePasswordRepeatChange = (e) => {
        setPasswordRepeat(e.target.value);
        if (passwordRepeatMessage) {
            setPasswordRepeatMessage("");
        }
    }


    return(
        <div className="login">
            <h2 className="login_h2"> Załóż konto </h2>
            <img src={decoration} className="login_decoration"/>
            <div className="form_div">
                <form className="form_login" onSubmit={handleSubmit}>
                    <div className="login_form">
                        <label className="form_label">Email</label>
                        <input type="text" className={`login_input ${emailMessage ? 'input_error' : ''}`} value={email} onChange={handleEmailChange}/>
                        {emailMessage && <p className="error_message">{emailMessage}</p>}
                    </div>
                    <div className="login_form">
                        <label className="form_label">Hasło</label>
                        <input type="password" className={`login_input ${passwordMessage ? 'input_error' : ''}`} value={password}
                               onChange={handlePasswordChange}/>
                        {passwordMessage && <p className="error_message">{passwordMessage}</p>}
                    </div>
                    <div className="login_form">
                        <label className="form_label">Powtórz hasło</label>
                        <input type="password" className={`login_input ${passwordRepeatMessage ? 'input_error' : ''}`} value={passwordRepeat}
                               onChange={handlePasswordRepeatChange}/>
                        {passwordRepeatMessage && <p className="error_message">{passwordRepeatMessage}</p>}
                    </div>
                    <div className="register_buttons">
                        <Link to="/login" className="login_buttons ">Zaloguj się</Link>
                        <button className="login_buttons login_button">Załóż konto</button>
                    </div>
                </form>
            </div>
        </div>
    )
};
export default Register
