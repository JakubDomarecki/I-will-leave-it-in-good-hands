import React from "react";
import decoration from '../../../assets/Decoration.svg'
import './Contact.scss'
import {Element} from "react-scroll";
import instagram from '../../../assets/Instagram.svg'
import facebook from '../../../assets/Facebook.svg'
const Contact = () => {
    return(
        <Element name="contact">
            <div className="contact">
                <div className="contact_form">
                    <p className="contact_title">Skontaktuj się z nami</p>
                    <img src={decoration}/>
                    <form>
                        <div className="form_inputs">
                            <div className="single_input">
                                <label className="contact_label">Wpisz swoje imię</label>
                                <input className="contact_input" type="text" placeholder="Krzysztof"/>
                            </div>
                            <div className="single_input">
                                <label className="contact_label">Wpisz swój email</label>
                                <input className="contact_input" type="email" placeholder="abc@xyz.pl"/>
                            </div>
                        </div>
                        <div className="single_input">
                            <label className="contact_label">Wpisz swoją wiadomość</label>
                            <textarea className="contact_texarea"
                                      placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."></textarea>
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