/* eslint-disable react/jsx-key */
import CompanyLinks from "./CompanyLinks";
import ContactInfo from "./contactInfo/ContactInfo";

const CompanyInfo = () => {
    const companyInfo = [
        {
            categoryType: "COMPANY INFO",
            companyLinks: [
                {
                    title: "About SHEIN",
                    link: "https://us.shein.com/About-Us-a-117.html"
                },
                {
                    title: "Sustainability",
                    link: "https://sheingroup.com/sustainability/"
                },
                {
                    title: "Fashion Blogger",
                    link: "https://us.shein.com/campaigns/sheinpartner"
                },
                {
                    title: "Supply Chain",
                    link: "https://us.shein.com/SUPPLY-CHAIN-TRANSPARENCY-STATEMENT-a-1091.html"
                },
                {
                    title: "Careers",
                    link: "https://www.linkedin.com/careersite/sheinus"
                },
                {
                    title: "Student Discount",
                    link: "https://us.shein.com/student-verification"
                },
                {
                    title: "#SHEIN101",
                    link: "https://us.shein.com/campaigns/shein101us?test_branch=default"
                },
            ]
        },
        {
            categoryType: "HELP & SUPPORT",
            companyLinks: [
                {
                    title: "Shipping Info",
                    link: "https://us.shein.com/Shipping-Info-a-280.html"
                },
                {
                    title: "Returns",
                    link: "https://us.shein.com/Return-Policy-a-281.html"
                },
                {
                    title: "Refund",
                    link: "https://us.shein.com/refund-a-1703.html"
                },
                {
                    title: "How To Order",
                    link: "https://us.shein.com/How-to-order-a-276.html"
                },
                {
                    title: "How To Track",
                    link: "https://us.shein.com/How-to-track-my-order-a-496.html"
                },
                {
                    title: "Size Guide",
                    link: "https://us.shein.com/How-to-choose-your-size-a-748.html"
                },
                {
                    title: "SHEIN VIP",
                    link: "https://us.shein.com/SHEIN-VIP-a-1009.html"
                },
                {
                    title: "Sell On Shein",
                    link: "https://us.shein.com/campaign/marketplace-sellers"
                },
            ]
        },
        {
            categoryType: "CUSTOMER CARE",
            companyLinks: [
                {
                    title: "Contact Us",
                    link: "https://us.shein.com/contact-us.html"
                },
                {
                    title: "Payment & Tax",
                    link: "https://us.shein.com/How-to-Pay-a-278.html"
                },
                {
                    title: "Bonus Point",
                    link: "https://us.shein.com/bonus-point-program-a-371.html"
                },
            ]
        }
    ];

    return (
        <div className="row company-info">
            <div className="col-6-xs">
                <div className="row">
                    {
                        companyInfo.map((item, index) => (
                            <CompanyLinks
                                key={index}
                                item={item}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="col-6-xs">
                <ContactInfo />
            </div>
        </div>
    );
}
 
export default CompanyInfo;