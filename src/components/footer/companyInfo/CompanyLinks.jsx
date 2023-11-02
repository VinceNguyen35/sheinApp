/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const CompanyLinks = ({infoLinks}) => {
    return (
        <div>
            <h6>{infoLinks.categoryName}</h6>
            {
                infoLinks.companyLinks.map((link, index) => (
                    <div>
                        <a href="" id={index}>{link}</a>
                        <br />
                    </div>
                ))
            }
        </div>
    );
}
 
export default CompanyLinks;