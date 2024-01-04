// React Imports
import { useState, useEffect } from "react";

// Component Imports
import SearchBar from "./SearchBar";
import MiscellaneousNav from "./MiscellaneousNav";

// Img Imports
import sheinLogo from "../../../../assets/logos/sheinLogo.png";
import leftArrowBlackIcon from "../../../../assets/logos/leftArrowBlackIcon.png";
import navbarIcon from "../../../../assets/logos/navbarIcon.png";

const GeneralNav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

    const updateMedia = () => {
        setIsMobile(window.innerWidth < 480);
    }

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    return (
        <div className="general-nav">
            <div className="header-left">
                {
                    isMobile &&
                    <div className="navigation">
                        <img
                            src={leftArrowBlackIcon}
                            alt="left arrow"
                        />
                        <img
                            src={navbarIcon}
                            alt="Navbar Icon"
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
                <MiscellaneousNav isMobile={ isMobile }/>
            </div>
        </div>
    );
}
 
export default GeneralNav;