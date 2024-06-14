import React, {useState} from "react";
import decoration from '../../../assets/Decoration.svg'
import './Contact.scss'
import {Element} from "react-scroll";
import instagram from '../../../assets/Instagram.svg'
import facebook from '../../../assets/Facebook.svg'
import {json} from "react-router-dom";
const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [emptyMessage, setEmptyMessage] = useState("")
    const [oneWordMessage, setOneWordMessage] = useState("")
    const [maxWords, setmaxWords] = useState("")
    const [emailWalidation, setemailWalidation] = useState("")

    const [success, setSuccess] = useState()
    const [error, setError] = useState()


    const handleSubmit = (e) => {
        e.preventDefault();

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (name === "" || email === "" || message === "") {
            setEmptyMessage("Pola nie mogą być puste");
            setOneWordMessage("");
            setmaxWords("");
            setemailWalidation("");
        } else {
            setEmptyMessage("");



            if (name.trim().split(" ").length > 1) {
                setOneWordMessage("Podane imię jest nieprawidłowe");

            } else {
                setOneWordMessage("");
            }

            if (!re.test(email)) {
                setemailWalidation("Podaj prawidłowy adres email");
            } else {
                setemailWalidation("");
            }

            if (message.length < 120) {
                setmaxWords("Wiadomość musi mieć conajmniej 120 znaków!");
            } else {
                setmaxWords("");
            }

            if (name.trim().split(" ").length === 1 && re.test(email) && message.length >= 120) {
                const wholeMessage = {
                    name,
                    email,
                    message,
                };
                fetch('https://fer-api.coderslab.pl/v1/portfolio/contact',{
                    method: 'POST',
                    body: JSON.stringify(wholeMessage),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(resp => resp.json())
                    .then(data => setSuccess(data))
                    .catch(err => setError(err));
            }
        }
    };




    return(
        <Element name="contact">
            <div className="contact">
                <div className="contact_form">
                    <p className="contact_title">Skontaktuj się z nami</p>
                    <img src={decoration}/>
                    {success && <p className="success_message">{success}</p>}
                    {error && <p className="error_message">{error}</p>}
                    <form onSubmit={handleSubmit}>
                        <div className="form_inputs">
                            <div className="single_input">
                                <label className="contact_label">Wpisz swoje imię</label>
                                <input className="contact_input"
                                       type="text"
                                       placeholder="Krzysztof"
                                       value={name} onChange={e => setName(e.target.value)}/>
                                {oneWordMessage && <p className="error_message">{oneWordMessage}</p>}
                            </div>
                            <div className="single_input">
                                <label className="contact_label">Wpisz swój email</label>
                                <input className="contact_input"
                                       type="email"
                                       placeholder="abc@xyz.pl"
                                        value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>
                                {emailWalidation && <p className="error_message">{emailWalidation}</p>}
                            </div>
                        </div>
                        <div className="single_input">
                            <label className="contact_label">Wpisz swoją wiadomość</label>
                            <textarea className="contact_texarea"
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      value={message}
                                        onChange={e => setMessage(e.target.value)}>

                            </textarea>
                            {maxWords && <p className="error_message">{maxWords}</p>}
                        </div>
                        {emptyMessage && <p className="empty_message">{emptyMessage}</p>}
                        <div className="Button_div">
                            <button className="sendButton">Wyślij</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="icons container">
                <a href="https://www.facebook.com/"><img src={facebook}/></a>
                <a href="https://www.instagram.com/"><img src={instagram}/></a>
            </div>
        </Element>
    )
}
export default Contact;