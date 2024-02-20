/* eslint-disable react/prop-types */

// React Imports
import { useContext } from "react";

// Context Imports
import { CartContext } from "../../../../context/CartContext";

// Component Imports
import userIcon from "../../../../assets/logos/userIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";
import heartIconBlack from "../../../../assets/logos/heartIconBlack.png";
import headphonesIcon from "../../../../assets/logos/headphonesIcon.png";
import globeIcon from "../../../../assets/logos/globeIcon.png";
import searchIconBlack from "../../../../assets/logos/searchIconBlack.png";
import shareIcon from "../../../../assets/logos/shareIcon.png";

const MiscellaneousNav = ({ isMobile }) => {

    const cartTotal = useContext(CartContext);

    return (
        <div className="miscellaneous-nav">
            {
                isMobile &&
                <div className="miscellaneous-nav-mobile">
                    <div className="miscellaneous-icon">
                        <img
                            src={searchIconBlack}
                            alt="Search Icon"
                        />
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={shareIcon}
                            alt="Share Icon"
                        />
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={shoppingCartIcon}
                            alt="Shopping Cart Icon"
                        />
                    </div>
                </div>

            }
            {
                !isMobile &&
                <div className="miscellaneous-nav-desktop">
                    <div className="miscellaneous-icon">
                        <img
                            src={userIcon}
                            alt="User Icon"
                        />
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={shoppingCartIcon}
                            alt="Shopping Cart Icon"
                        />
                        { cartTotal.cartTotal }
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={heartIconBlack}
                            alt="Heart Icon"
                        />
                        0
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={headphonesIcon}
                            alt="Headphones Icon"
                        />
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={globeIcon}
                            alt="Globe Icon"
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default MiscellaneousNav;