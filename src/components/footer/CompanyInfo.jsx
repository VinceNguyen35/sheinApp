/* eslint-disable react/jsx-key */
import CompanyLinks from "./companyInfo/CompanyLinks";
import ContactInfo from "./companyInfo/ContactInfo";

const companyInfo = [
    {
        categoryName: "COMPANY INFO",
        companyLinks: [
            "About SHEIN",
            "Sustainability",
            "Fashion Blogger",
            "Supply Chain",
            "Careers",
            "Student Discount",
            "#SHEIN101"
        ]
    },
    {
        categoryName: "HELP & SUPPORT",
        companyLinks: [
            "Shipping Info",
            "Returns",
            "Refund",
            "How To Order",
            "How To Track",
            "Size Guide",
            "SHEIN VIP",
            "Sell On Shein"
        ]
    },
    {
        categoryName: "CUSTOMER CARE",
        companyLinks: [
            "Contact Us",
            "Payment & Tax",
            "Bonus Point"
        ]
    }
];

const CompanyInfo = () => {
    return (
        <div>
            <h4>Company Info Here</h4>
            <div className="col-left">
                {
                    companyInfo.map((infoLinks, index) => (
                        <CompanyLinks
                            key={index}
                            infoLinks={infoLinks}
                        />
                    ))
                }
            </div>
            <div
            className="col-right">
                <ContactInfo />
            </div>
        </div>
    );
}
 
export default CompanyInfo;