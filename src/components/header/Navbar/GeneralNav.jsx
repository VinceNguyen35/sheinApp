import SearchBar from "./generalNav/SearchBar";
import MiscellaneousNav from "./generalNav/MiscellaneousNav";
import sheinLogo from "../../../assets/logos/sheinLogo.png";

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