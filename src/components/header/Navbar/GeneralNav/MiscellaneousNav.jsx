// React Imports
import { useState } from "react";

// Component Imports
import userIcon from "../../../../assets/logos/userIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";
import heartIconGrey from "../../../../assets/logos/heartIconGrey.png";
import headphonesIcon from "../../../../assets/logos/headphonesIcon.png";
import globeIcon from "../../../../assets/logos/globeIcon.png";

const MiscellaneousNav = () => {
    const [shoppingCartItemsTotal, setShoppingCartItemsTotal] = useState(0);
    const [favoriteItemsTotal, setFavoriteTotal] = useState(0);
    const [userHover, setUserHover] = useState(false);
    const [shoppingCartHover, setShoppingCartHover] = useState(false);
    const [supportHover, setSupportHover] = useState(false);
    const [internationalHover, setInternationalHover] = useState(false);

    return (
        <div className="general-nav-icons">
            <div
                className="user-settings"
                onMouseOver={() => setUserHover(true)}
                onMouseOut={() => setUserHover(false)}
            >
                <img
                    src={userIcon}
                    alt="User Icon"
                />
            </div>
            <div
                className="shopping-cart"
                onMouseOver={() => setShoppingCartHover(true)}
                onMouseOut={() => setShoppingCartHover(false)}
            >
                <img
                    src={shoppingCartIcon}
                    alt="Shopping Cart Icon"
                />
                { shoppingCartItemsTotal }
            </div>
            <div className="favorites">
                <img
                    src={heartIconGrey}
                    alt="Heart Icon"
                />
                { favoriteItemsTotal }
            </div>
            <div
                className="support"
                onMouseOver={() => setSupportHover(true)}
                onMouseOut={() => setSupportHover(false)}
            >
                <img
                    src={headphonesIcon}
                    alt="Headphones Icon"
                />
            </div>
            <div
                className="international"
                onMouseOver={() => setInternationalHover(true)}
                onMouseOut={() => setInternationalHover(false)}
            >
                <img
                    src={globeIcon}
                    alt="Globe Icon"
                />
            </div>
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