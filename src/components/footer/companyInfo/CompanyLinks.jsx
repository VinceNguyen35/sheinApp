/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const CompanyLinks = ({item}) => {
    return (
        <div>
            <h6>{item.categoryType}</h6>
            {
                item.companyLinks.map((link, index) => (
                    <div>
                        <a
                            href={link.link}
                            id={index}
                        >
                            {link.title}
                        </a>
                    </div>
                ))
            }
        </div>
    );
}
 
export default CompanyLinks;