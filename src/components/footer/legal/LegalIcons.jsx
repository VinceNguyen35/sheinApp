import trustwaveIcon from "../../../assets/logos/trustwaveIcon.png";
import dmcaIcon from "../../../assets/logos/dmcaIcon.png";

const LegalIcons = () => {
    return (
        <div className="legal-icons">
            <a href="https://sealserver.trustwave.com/cert.php?customerId=&size=105x54&style=invert&form=&baseURL=fr.shein.com">
                <img
                    src={ trustwaveIcon }
                    alt="Trustwave icon"
                />
            </a>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=8c71f59c-ee5a-4cde-a57f-4bb14086371e&refurl=https://us.shein.com">
                <img
                    src={ dmcaIcon }
                    alt="DMCA icon"
                />
            </a>
        </div>
    );
}
 
export default LegalIcons;