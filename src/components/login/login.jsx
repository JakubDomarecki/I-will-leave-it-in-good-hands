import React, {useState} from "react";
import './login&register.scss'
import decoration from '../../assets/Decoration.svg'
import {Link, useNavigate} from "react-router-dom";
import {auth} from "../firebaseConfig.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import {useLogin} from "../Context.jsx";
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [passwordMessage, setPasswordMessage] = useState("")
    const [emailMessage, setEmailMessage] = useState("")

    const [smthWrong, setSmthWrong] = useState("")

    const navigate = useNavigate();
    const {login} = useLogin();

    const handleSubmit = (e) => {
        e.preventDefault();

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

        if (valid) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {

                    const user = userCredential.user;

                    setEmail("");
                    setPassword("");

                    navigate("/");
                    login(user)
                })
                .catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;


                    if (errorCode === 'auth/invalid-credential') {
                        setSmthWrong("Nieprawidłowe hasło lub email");
                    }

                });
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


return(
    <div className="login">
        <h2 className="login_h2"> Zaloguj się </h2>
        <img src={decoration} className="login_decoration"/>
        <div className="form_div">
            <form className="form_login" onSubmit={handleSubmit}>
                <div className="login_form">
                    <label className="form_label">Email</label>
                    <input type="text" className={`login_input ${emailMessage ? 'input_error' : ''} `} value={email} onChange={handleEmailChange}/>
                    {emailMessage && <p className="error_message">{emailMessage}</p>}
                </div>
                <div className="login_form">
                    <label className="form_label">Hasło</label>
                    <input type="password" className={`login_input ${passwordMessage ? 'input_error' : ''}`} value={password}
                           onChange={handlePasswordChange}/>
                    {passwordMessage && <p className="error_message">{passwordMessage}</p>}
                    {smthWrong && <p className="error_message">{smthWrong}</p>}

                </div>
                <div>
                    <Link to="/register" className="login_buttons">Załóż konto</Link>
                    <button className="login_buttons login_button">Zaloguj się</button>
                </div>
            </form>
        </div>
    </div>
)
};
export default Login