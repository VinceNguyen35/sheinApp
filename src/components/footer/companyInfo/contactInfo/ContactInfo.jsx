// React Imports
import { useState } from "react";

// Component Imports
import SocialMedia from "./SocialMedia";
import AppDownload from "./AppDownload";

// Img Imports
import downArrowBlackIcon from "../../../../assets/logos/downArrowBlackIcon.png";

const ContactInfo = () => {

    const [email, setEmail] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberErrorMessage, setPhoneNumberErrorMessage] = useState("");

    const handleEmailSubscribe = (event) => {
        event.preventDefault();
        if (email.includes("@") && email.includes(".")) { // input validation
            setEmailErrorMessage("");
        } else if (email === "") { // check for empty string
            setEmailErrorMessage("Please enter an email address.");
        } else {
            setEmailErrorMessage("Oops! It looks like you entered an invalid email address.");
        }
    }

    const handleEmailChange = (event) => {
        event.preventDefault();
        setEmailErrorMessage("");
        setEmail(event.target.value);
    }

    const handlePhoneSubscribe = (event) => {
        event.preventDefault();
        if (phoneNumber.length === 10 && !isNaN(phoneNumber)) {
            setPhoneNumberErrorMessage("");
        } else if (phoneNumber === "") {
            setPhoneNumberErrorMessage("Please enter your WhatsApp account.");
        } else {
            setPhoneNumberErrorMessage("Oops! It looks like you entered an invalid WhatsApp account.");
        }
    }

    const handlePhoneChange = (event) => {
        event.preventDefault();
        setPhoneNumberErrorMessage("");
        setPhoneNumber(event.target.value);
    }

    return (
        <div className="contact-info">
            <div className="row">
                <div className="col-8-xs">
                    <h6>FIND US ON</h6>
                    <SocialMedia />
                </div>
                <div className="col-4-xs">
                    <h6>DOWNLOAD SHEIN APP TO SAVE MORE!</h6>
                    <AppDownload />
                </div>
            </div>
            <div className=" row signup-forms">
                <h6>SIGN UP FOR SHEIN STYLE NEWS</h6>
                <form
                    action="#"
                    method="POST"
                    onSubmit={ event => handleEmailSubscribe(event) }
                >
                    <div className="footer-input">
                        <input
                            type="text"
                            placeholder="Your Email Address"
                            value={ email }
                            onChange={ event => handleEmailChange(event) }
                        />
                        <div className="footer-tips">
                            <div className="input-error-text">
                                { emailErrorMessage }
                            </div>
                        </div>
                    </div>
                    <div
                        className="subscribe"
                        onClick={ event => handleEmailSubscribe(event) }
                    >
                        Subscribe
                    </div>
                </form>
                <form
                    action="#"
                    method="POST"
                    onSubmit={ event => handlePhoneSubscribe(event) }
                >
                    <div className="footer-input">
                        <div className="phone">
                            <div className="phone-country-code">
                                <span>US + 1</span>
                                <img src={ downArrowBlackIcon } alt="down arrow" />
                            </div>
                            <input
                                type="text"
                                placeholder="WhatsApp Account"
                                value={ phoneNumber }
                                onChange={ event => handlePhoneChange(event) }
                            />
                        </div>
                        <div className="footer-tips">
                            <div className="input-error-text">
                                { phoneNumberErrorMessage }
                            </div>
                        </div>
                        <div className="privacy-statement">
                            <p>
                                By clicking the SUBSCRIBE button,
                                you are agreeing to our <span><a href="https://us.shein.com/Privacy-Security-Policy-a-282.html">Privacy & Cookie Policy</a></span>.
                                If you want to unsubsribe the marketing email,
                                please proceed to our <span><a href="https://us.shein.com/user/privacy_request?isVisitor=true">privacy center</a></span>.
                            </p>
                        </div>
                    </div>
                    <div
                        className="subscribe"
                        onClick={ event => handlePhoneSubscribe(event) }
                    >
                        Subscribe
                    </div>
                </form>
            </div>
        </div>
    );
}
 
export default ContactInfo;