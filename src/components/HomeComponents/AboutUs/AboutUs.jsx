import React from "react";
import people from '../../../assets/People.jpg'
import decoration from '../../../assets/Decoration.svg'
import './AboutUs.scss'
import {Element} from "react-scroll";
const AboutUs = () => {
    return(
        <Element name="AboutUs">
            <div className='AboutUs'>
                <div className="AboutUs_description">
                    <p className="AboutUs_title">O nas</p>
                    <img src={decoration}/>
                    <p className="AboutUs_text">Nori grape silver beet broccoli kombu beet greens fava bean potato
                        quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                </div>
                <div className="AboutUs_image">
                    <img src={people} className="dw134"/>
                </div>
            </div>
        </Element>
    )
}
export default AboutUs;
