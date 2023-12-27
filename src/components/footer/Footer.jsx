import CompanyInfo from "./companyInfo/CompanyInfo";
import Legal from "./legal/Legal";

const footer = () => {
    return (
        <div className="footer">
            <CompanyInfo />
            <div className="row">
                <Legal />
            </div>
        </div>
    );
}
 
export default footer;