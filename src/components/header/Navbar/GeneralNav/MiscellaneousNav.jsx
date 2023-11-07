import userIcon from "../../../../assets/logos/userIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";
import heartIcon from "../../../../assets/logos/heartIcon.png";
import headphonesIcon from "../../../../assets/logos/headphonesIcon.png";
import globeIcon from "../../../../assets/logos/globeIcon.png";

const MiscellaneousNav = () => {
    return (
        <div>
            <img
                src={userIcon}
                alt="User Icon"
                style={{ width: 20 }}
            />
            <img
                src={shoppingCartIcon}
                alt="Shopping Cart Icon"
                style={{ width: 20 }}
            />
            <img
                src={heartIcon}
                alt="Heart Icon"
                style={{ width: 20 }}
            />
            <img
                src={headphonesIcon}
                alt="Headphones Icon"
                style={{ width: 20 }}
            />
            <img
                src={globeIcon}
                alt="Globe Icon"
                style={{ width: 20 }}
            />
        </div>
    );
}
 
export default MiscellaneousNav;