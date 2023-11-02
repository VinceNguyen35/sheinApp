import LegaLinks from "./legal/LegalLinks";
import LegalIcons from "./legal/LegalIcons";

const Legal = () => {
    return (
        <div>
            <h4>Legal Stuff</h4>
            <div className="col-left">
                <LegaLinks />
            </div>
            <div className="col-right">
                <LegalIcons />
            </div>
        </div>
    );
}
 
export default Legal;