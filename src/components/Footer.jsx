import CompanyInfo from "./footer/CompanyInfo";
import Legal from "./footer/Legal";

const footer = () => {
    return (
        <div>
            <h3>Footer</h3>
            <div className="row">
                <CompanyInfo />
            </div>
            <div className="row">
                <Legal />
            </div>
        </div>
    );
}
 
export default footer;