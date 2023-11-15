import userIcon from "../../../../assets/logos/userIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";
import heartIconGrey from "../../../../assets/logos/heartIconGrey.png";
import headphonesIcon from "../../../../assets/logos/headphonesIcon.png";
import globeIcon from "../../../../assets/logos/globeIcon.png";

const MiscellaneousNav = () => {
    return (
        <div className="general-nav-icons">
            <img
                src={userIcon}
                alt="User Icon"
            />
            <img
                src={shoppingCartIcon}
                alt="Shopping Cart Icon"
            />
            <img
                src={heartIconGrey}
                alt="Heart Icon"
            />
            <img
                src={headphonesIcon}
                alt="Headphones Icon"
            />
            <img
                src={globeIcon}
                alt="Globe Icon"
            />
        </div>
    );
}
 
export default MiscellaneousNav;