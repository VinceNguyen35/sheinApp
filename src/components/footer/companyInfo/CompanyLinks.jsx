/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const CompanyLinks = ({item}) => {
    return (
        <div>
            <h6>{item.categoryType}</h6>
            {
                item.companyLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.link}
                    >
                        {link.title}
                    </a>
                ))
            }
        </div>
    );
}
 
export default CompanyLinks;