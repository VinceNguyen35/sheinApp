import CompanyInfo from "./companyInfo/CompanyInfo";
import Legal from "./legal/Legal";

const footer = () => {
    return (
        <div className="footer">
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