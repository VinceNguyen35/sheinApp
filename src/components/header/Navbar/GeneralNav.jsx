// React Imports
import { useState } from "react";

// Component Imports
import sheinLogo from "../../../assets/logos/sheinLogo.png";
import SearchBar from "./generalNav/SearchBar";
import SearchContent from "./generalNav/SearchContent";
import MiscellaneousNav from "./generalNav/MiscellaneousNav";

const GeneralNav = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="general-nav">
            <div className="header-left">
                <a href="https://us.shein.com">
                    <img
                        src={sheinLogo}
                        alt="Shein Logo"
                    />
                </a>
            </div>
            <div className="header-center">
                <SearchBar
                    setIsEditing={ setIsEditing }
                />
                {
                    isEditing && <SearchContent />
                }
            </div>
            <div className="header-right">
                <MiscellaneousNav />
            </div>
        </div>
    );
}
 
export default GeneralNav;