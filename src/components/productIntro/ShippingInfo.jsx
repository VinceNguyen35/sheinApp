// Image Imports
import shippingIcon from "../../assets/logos/shippingIcon.png";
import returnBoxIcon from "../../assets/logos/returnBoxIcon.png";
import storeIcon from "../../assets/logos/storeIcon.png";

const ShippingInfo = () => {
    // Getting Today's Date
    const today = new Date();
    let yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;  // Months start at 0
    let dd = today.getDate();

    // Calculating Estimated Shipping Dates
    let fastestShippingDay = dd + 8;
    if (fastestShippingDay > 30) {
        fastestShippingDay = fastestShippingDay - 30;
        mm++;
    }
    if (mm > 12) {
        mm = 1;
        yyyy++;
    }

    let averageShippingDay = dd + 10;
    if (averageShippingDay > 30) {
        averageShippingDay = averageShippingDay - 30;
        mm++;
    }
    if (mm > 12) {
        mm = 1;
        yyyy++;
    }

    let slowestShippingDay = dd + 13;
    if (slowestShippingDay > 30) {
        slowestShippingDay = slowestShippingDay - 30;
        mm++;
    }
    if (mm > 12) {
        mm = 1;
        yyyy++;
    }

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const fastestShippingDate = mm + '/' + fastestShippingDay + '/' + yyyy;
    const averageShippingDate = mm + '/' + averageShippingDay + '/' + yyyy;
    const slowestShippingDate = mm + '/' + slowestShippingDay + '/' + yyyy;

    return (
        <div className="shipping-info">
            <div className="shipping-header">Shipping to United States</div>
            <div className="shipping-section">
                <div className="shipping-section-header">
                    <img src={ shippingIcon } alt="shipping icon" />
                    <span className="shipping-section-header-title">Delivery</span>
                </div>
                <div className="shipping-section-details">
                    <div className="shipping-option">
                        Standard Shipping: $3.99, FREE on orders $29.00+
                        <br />
                        Estimated to be delivered on {averageShippingDate} - {slowestShippingDate}
                        <br />
                        77.13% are ≤ 10 days
                    </div>
                    <br />
                    <div className="shipping-option">
                        Express Shipping: $12.99, FREE on orders $129.00+
                        <br />
                        Estimated to be delivered on {fastestShippingDate} - {averageShippingDate}
                        <br />
                        80.94% are ≤ 7 days
                    </div>
                </div>
            </div>
            <div className="shipping-section">
                <div className="shipping-section-header">
                    <img src={ returnBoxIcon } alt="return box icon" />
                    <span className="shipping-section-header-title">Free Return & Exchange</span>
                </div>
                <div className="shipping-section-details">
                    Learn More
                </div>
            </div>
            <div className="shipping-section">
                <div className="shipping-section-header">
                    <img src={ storeIcon } alt="store icon" />
                    <span className="shipping-section-header-title">Sold by SHEIN</span>
                </div>
                <div className="shipping-section-details">
                    Ships from SHEIN
                </div>
            </div>
        </div>
    );
}
 
export default ShippingInfo;