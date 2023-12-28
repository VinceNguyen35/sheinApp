import SocialMedia from "./SocialMedia";
import AppDownload from "./AppDownload";

const ContactInfo = () => {

    return (
        <>
            <div className="row contact-info">
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
                <form action="#" method="POST">
                    <label>
                        SIGN UP FOR SHEIN STYLE NEWS
                    </label>
                    <input
                        type="text"
                        placeholder="Your Email Address"
                    />
                    <button>Subscribe</button>
                </form>
                <form action="#" method="POST">
                    <div>
                        <ul>
                            <li>Canada + 1</li>
                            <li>United States + 1</li>
                        </ul>
                    </div>
                    <input
                        type="text"
                        placeholder="WhatsApp Account"
                    />
                    <button>Subscribe</button>
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
        </>
    );
}
 
export default ContactInfo;