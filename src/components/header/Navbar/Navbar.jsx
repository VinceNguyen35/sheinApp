// React Imports
import { useContext } from "react";

// Context Imports
import { MobileContext } from "../../../context/MobileContext";

// Component Imports
import GeneralNav from "./generalNav/GeneralNav";
import CategoriesNav from "./categoriesNav/CategoriesNav";

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