// React Imports
import { useContext } from "react";

// Context Imports
import { MobileContext } from "../../context/MobileContext";

// Component Imports
import TopBanner from "./TopBanner";
import Navbar from "./Navbar/Navbar";

const Header = () => {
    const isMobile = useContext(MobileContext);

    return (
        <div className="header">
            {
                !isMobile &&
                <TopBanner />
            }
            <Navbar />
        </div>
    );
}
 
export default Header;