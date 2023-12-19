// Component Imports
import sheinLogo from "../../../../assets/logos/sheinLogo.png";
import SearchBar from "./SearchBar";
import MiscellaneousNav from "./MiscellaneousNav";

const GeneralNav = () => {

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
                <SearchBar />
            </div>
            <div className="header-right">
                <MiscellaneousNav />
            </div>
        </div>
    );
}
 
export default GeneralNav;