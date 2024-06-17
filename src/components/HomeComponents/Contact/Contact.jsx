import React, {useEffect, useState} from "react";
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

    const [nameError, setNameError] = useState("")
    const [emailError, setemailError] = useState("")
    const [messageError, setmessageError] = useState("")


    const [success, setSuccess] = useState()
    const [error, setError] = useState([])

    useEffect(() => {
        const emailError = error.find(msg => msg.param === 'email');
        const nameError = error.find(msg => msg.param === 'name');
        const messageError = error.find(msg => msg.param === 'message');

        if (emailError) {
            setemailError(emailError.msg);
        }else {
            setemailError(null)
        }

        if (nameError) {
            setNameError(nameError.msg);
        }else {
            setNameError(null)
        }

        if (messageError) {
            setmessageError(messageError.msg);
        }else {
            setmessageError(null)
        }


    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();

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
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                if (data.status === 'error') {
                    setError(data.errors);
                    setSuccess(null);
                } else {
                    setSuccess(data);
                    setError([]);
                }
            })
    };




    return(
        <Element name="contact">
            <div className="contact">
                <div className="contact_form">
                    <p className="contact_title">Skontaktuj się z nami</p>
                    <img src={decoration}/>

                    {success && success.status  === 'success' && <p className="success_message">Wiadomość została wysłana! Wkrótce się skontaktujemy.</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="form_inputs">
                            <div className="single_input">
                                <label className="contact_label">Wpisz swoje imię</label>
                                <input className="contact_input"
                                       type="text"
                                       placeholder="Krzysztof"
                                       value={name} onChange={e => setName(e.target.value)}/>

                                {nameError && <p className="error_message">{nameError}</p>}

                            </div>
                            <div className="single_input">
                                <label className="contact_label">Wpisz swój email</label>
                                <input className="contact_input"
                                       type="email"
                                       placeholder="abc@xyz.pl"
                                        value={email}
                                       onChange={(e) => setEmail(e.target.value)}/>

                                {emailError && <p className="error_message">{emailError}</p>}

                            </div>
                        </div>
                        <div className="single_input">
                            <label className="contact_label">Wpisz swoją wiadomość</label>
                            <textarea className="contact_texarea"
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                                      value={message}
                                        onChange={e => setMessage(e.target.value)}>

                            </textarea>
                            {messageError && <p className="error_message">{messageError}</p>}

                        </div>


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