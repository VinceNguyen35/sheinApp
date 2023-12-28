import CompanyInfo from "./companyInfo/CompanyInfo";
import Legal from "./legal/Legal";

const footer = () => {
    return (
        <div className="footer">
            <CompanyInfo />
            <Legal />
        </div>
    );
}
 
export default footer;