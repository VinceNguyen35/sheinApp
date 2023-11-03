import trustwaveIcon from "../../../assets/trustwaveIcon.png";
import dmcaIcon from "../../../assets/dmcaIcon.png";

const LegalIcons = () => {
    return (
        <div>
            <img
                src={trustwaveIcon}
                alt="Trustwave icon"
                style={{ height: 24 }}
            />
            <img
                src={dmcaIcon}
                alt="DMCA icon"
                style={{ height: 24 }}
            />
        </div>
    );
}
 
export default LegalIcons;