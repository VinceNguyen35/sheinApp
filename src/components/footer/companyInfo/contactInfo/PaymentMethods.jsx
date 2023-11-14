import visaIcon from "../../../../assets/logos/visaIcon.png";
import mastercardIcon from "../../../../assets/logos/mastercardIcon.png";
import maestroIcon from "../../../../assets/logos/maestroIcon.png";
import amexIcon from "../../../../assets/logos/amexIcon.png";
import discoverIcon from "../../../../assets/logos/discoverIcon.png";
import dinersclubIcon from "../../../../assets/logos/dinersclubIcon.png";
import paypalIcon from "../../../../assets/logos/paypalIcon.png";
import afterpayIcon from "../../../../assets/logos/afterpayIcon.png";
import klarnaIcon from "../../../../assets/logos/klarnaIcon.png";
import applepayIcon from "../../../../assets/logos/applepayIcon.png";
import googlepayIcon from "../../../../assets/logos/googlepayIcon.png";
import zipIcon from "../../../../assets/logos/zipIcon.png";
import venmoIcon from "../../../../assets/logos/venmoIcon.png";
import cashappIcon from "../../../../assets/logos/cashappIcon.png";
import affirmIcon from "../../../../assets/logos/affirmIcon.png";


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
                    key={ index }
                    src={ paymentMethod.icon }
                    alt={`${paymentMethod.name}` + " icon"}
                />
            ))}
        </div>
    );
}
 
export default PaymentMethods;