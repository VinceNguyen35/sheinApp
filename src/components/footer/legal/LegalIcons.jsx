import trustwaveIcon from "../../../assets/trustwaveIcon.png";
import dmcaIcon from "../../../assets/dmcaIcon.png";

const LegalIcons = () => {
    return (
        <div>
            <a href="https://sealserver.trustwave.com/cert.php?customerId=&size=105x54&style=invert&form=&baseURL=fr.shein.com">
                <img
                    src={trustwaveIcon}
                    alt="Trustwave icon"
                    style={{ height: 24 }}
                />
            </a>
            <a href="https://www.dmca.com/Protection/Status.aspx?ID=8c71f59c-ee5a-4cde-a57f-4bb14086371e&refurl=https://us.shein.com">
                <img
                    src={dmcaIcon}
                    alt="DMCA icon"
                    style={{ height: 24 }}
                />
            </a>
        </div>
    );
}
 
export default LegalIcons;