import userIcon from "../../../../assets/userIcon.png";
import shoppingCartIcon from "../../../../assets/shoppingCartIcon.png";
import heartIcon from "../../../../assets/heartIcon.png";
import headphonesIcon from "../../../../assets/headphonesIcon.png";
import globeIcon from "../../../../assets/globeIcon.png";

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