import LegaLinks from "./LegalLinks";
import LegalIcons from "./LegalIcons";

const Legal = () => {
    return (
        <div className="row legal">
            <div className="col-6-xs legal-links">
                <span>©2009-2023 SHEIN All Rights Reserved</span>
                <LegaLinks />
            </div>
            <div className="col-4 xs">
                <LegalIcons />
            </div>
        </div>
    );
}
 
export default Legal;