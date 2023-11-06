import visaIcon from "../../../../assets/visaIcon.png";
import mastercardIcon from "../../../../assets/mastercardIcon.png";
import maestroIcon from "../../../../assets/maestroIcon.png";
import amexIcon from "../../../../assets/amexIcon.png";
import discoverIcon from "../../../../assets/discoverIcon.png";
import dinersclubIcon from "../../../../assets/dinersclubIcon.png";
import paypalIcon from "../../../../assets/paypalIcon.png";
import afterpayIcon from "../../../../assets/afterpayIcon.png";
import klarnaIcon from "../../../../assets/klarnaIcon.png";
import applepayIcon from "../../../../assets/applepayIcon.png";
import googlepayIcon from "../../../../assets/googlepayIcon.png";
import zipIcon from "../../../../assets/zipIcon.png";
import venmoIcon from "../../../../assets/venmoIcon.png";
import cashappIcon from "../../../../assets/cashappIcon.png";
import affirmIcon from "../../../../assets/affirmIcon.png";


const PaymentMethods = () => {
    const paymentMethodsList = [
        {
            name: "visa",
            icon: visaIcon
        },
        {
            name: "mastercard",
            icon: mastercardIcon
        },
        {
            name: "maestro",
            icon: maestroIcon
        },
        {
            name: "american express",
            icon: amexIcon
        },
        {
            name: "discover",
            icon: discoverIcon
        },
        {
            name: "diners club",
            icon: dinersclubIcon
        },
        {
            name: "paypal",
            icon: paypalIcon
        },
        {
            name: "after pay",
            icon: afterpayIcon
        },
        {
            name: "klarna",
            icon: klarnaIcon
        },
        {
            name: "apple pay",
            icon: applepayIcon
        },
        {
            name: "google pay",
            icon: googlepayIcon
        },
        {
            name: "zip",
            icon: zipIcon
        },
        {
            name: "venmo",
            icon: venmoIcon
        },
        {
            name: "cash app",
            icon: cashappIcon
        },
        {
            name: "affirm",
            icon: affirmIcon
        }
    ];

    return (
        <div>
            {paymentMethodsList.map((paymentMethod, index) => (
                <img
                    key={index}
                    src={paymentMethod.icon}
                    alt={`${paymentMethod.name}` + " icon"}
                    style={{ height: 40 }}
                />
            ))}
        </div>
    );
}
 
export default PaymentMethods;