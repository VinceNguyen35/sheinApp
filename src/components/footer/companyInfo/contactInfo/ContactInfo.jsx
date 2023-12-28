// Component Imports
import SocialMedia from "./SocialMedia";
import AppDownload from "./AppDownload";

// Img Imports
import downArrowBlackIcon from "../../../../assets/logos/downArrowBlackIcon.png";

const ContactInfo = () => {
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
                <form action="#" method="POST">
                    <input
                        type="text"
                        placeholder="Your Email Address"
                    />
                    <div className="subscribe">Subscribe</div>
                </form>
                <form action="#" method="POST">
                    <div className="phone-country-code">
                        <span>US + 1</span>
                        <img src={ downArrowBlackIcon } alt="down arrow" />
                    </div>
                    <input
                        type="text"
                        placeholder="WhatsApp Account"
                    />
                    <div className="subscribe">Subscribe</div>
                </form>
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
    );
}
 
export default ContactInfo;