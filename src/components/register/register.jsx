import React from "react";
import decoration from '../../assets/Decoration.svg'
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <div className="login">
            <h2 className="login_h2"> Załóż konto </h2>
            <img src={decoration}/>
            <div className="form_div">
                <form>
                    <div className="login_form">
                        <label className="form_label">Email</label>
                        <input type="text" className="login_input"/>
                    </div>
                    <div className="login_form">
                        <label className="form_label">Hasło</label>
                        <input type="Hasło" className="login_input"/>
                    </div>
                    <div className="login_form">
                        <label className="form_label">Powtórz hasło</label>
                        <input type="Hasło" className="login_input"/>
                    </div>
                </form>
            </div>
            <div>
                <Link to="/login" className="login_buttons ">Zaloguj się</Link>
                <Link to="/register" className="login_buttons login_button">Załóż konto</Link>
            </div>
        </div>
    )
};
export default Register
