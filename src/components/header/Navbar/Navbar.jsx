// React Imports
import { useContext } from "react";

// Context Imports
import { MobileContext } from "../../../context/MobileContext";

// Component Imports
import GeneralNav from "./GeneralNav/GeneralNav";
import CategoriesNav from "./CategoriesNav/CategoriesNav";

const Navbar = () => {
    const isMobile = useContext(MobileContext);

    return (
        <div className="navbar">
            <GeneralNav />
            {
                !isMobile &&
                <CategoriesNav />
            }
        </div>
    );
}

export default Navbar;