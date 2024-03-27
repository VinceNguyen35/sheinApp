// React Imports
import { useState, useContext } from "react";

// Context Imports
import { MobileContext } from "../../../../context/MobileContext";

// Component Imports
import SearchBar from "./SearchBar";
import MiscellaneousNav from "./MiscellaneousNav";

// Img Imports
import sheinLogo from "../../../../assets/logos/sheinLogo.png";
import leftArrowBlackIcon from "../../../../assets/logos/leftArrowBlackIcon.png";

const GeneralNav = () => {

    // State Variables
    const [showCart, setShowCart] = useState(false);

    // Context Variables
    const isMobile = useContext(MobileContext);

    return (
        <div className="general-nav">
            <div className="header-left">
                {
                    isMobile &&
                    <div className="navigation">
                        <img
                            src={leftArrowBlackIcon}
                            alt="left arrow"
                            onTouchStart={() => setShowCart(false)}
                        />
                    </div>
                }
                {
                    !isMobile &&
                    <a href="https://us.shein.com">
                        <img
                            src={sheinLogo}
                            alt="Shein Logo"
                        />
                    </a>
                }
            </div>
            <div className="header-center">
                {
                    isMobile &&
                    <a href="https://us.shein.com">
                        <img
                            src={sheinLogo}
                            alt="Shein Logo"
                        />
                    </a>
                }
                {
                    !isMobile &&
                    <SearchBar />
                }
            </div>
            <div className="header-right">
                <MiscellaneousNav
                    isMobile={isMobile}
                    showCart={showCart}
                    setShowCart={setShowCart}
                />
            </div>
        </div>
    );
}

export default GeneralNav;