/* eslint-disable react/prop-types */
// React Imports
import { useState } from "react";

// Component Imports
import userIcon from "../../../../assets/logos/userIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";
import heartIconBlack from "../../../../assets/logos/heartIconBlack.png";
import headphonesIcon from "../../../../assets/logos/headphonesIcon.png";
import globeIcon from "../../../../assets/logos/globeIcon.png";
import searchIconBlack from "../../../../assets/logos/searchIconBlack.png";
import shareIcon from "../../../../assets/logos/shareIcon.png";

const MiscellaneousNav = ({isMobile}) => {
    const [userHover, setUserHover] = useState(false);
    const [shoppingCartHover, setShoppingCartHover] = useState(false);
    const [supportHover, setSupportHover] = useState(false);
    const [internationalHover, setInternationalHover] = useState(false);

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
                    <div
                        className="miscellaneous-icon"
                        onMouseOver={() => setUserHover(true)}
                        onMouseOut={() => setUserHover(false)}
                    >
                        <img
                            src={userIcon}
                            alt="User Icon"
                        />
                    </div>
                    <div
                        className="miscellaneous-icon"
                        onMouseOver={() => setShoppingCartHover(true)}
                        onMouseOut={() => setShoppingCartHover(false)}
                    >
                        <img
                            src={shoppingCartIcon}
                            alt="Shopping Cart Icon"
                        />
                        0
                    </div>
                    <div className="miscellaneous-icon">
                        <img
                            src={heartIconBlack}
                            alt="Heart Icon"
                        />
                        0
                    </div>
                    <div
                        className="miscellaneous-icon"
                        onMouseOver={() => setSupportHover(true)}
                        onMouseOut={() => setSupportHover(false)}
                    >
                        <img
                            src={headphonesIcon}
                            alt="Headphones Icon"
                        />
                    </div>
                    <div
                        className="miscellaneous-icon"
                        onMouseOver={() => setInternationalHover(true)}
                        onMouseOut={() => setInternationalHover(false)}
                    >
                        <img
                            src={globeIcon}
                            alt="Globe Icon"
                        />
                    </div>
                </div>
            }
            {
                userHover && <div className="dropdown">User Hover</div>
            }
            {
                shoppingCartHover && <div className="dropdown">ShoppingCartHover</div>
            }
            {
                supportHover && <div className="dropdown">Support Hover</div>
            }
            {
                internationalHover && <div className="dropdown">International Hover</div>
            }
        </div>
    );
}
 
export default MiscellaneousNav;