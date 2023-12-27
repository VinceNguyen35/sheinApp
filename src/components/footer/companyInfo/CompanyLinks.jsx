/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const CompanyLinks = ({item}) => {
    return (
        <div className="col-3-xs list">
            <div className="list-header">
                { item.categoryType }
            </div>
            <ul>
                {
                    item.companyLinks.map((link, index) => (
                        <li key={ index }>
                            <a href={ link.link }>
                                { link.title }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
 
export default CompanyLinks;