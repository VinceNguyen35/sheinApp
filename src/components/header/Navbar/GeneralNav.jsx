import SearchBar from "./GeneralNav/SearchBar";
import MiscellaneousNav from "./GeneralNav/MiscellaneousNav";
import sheinLogo from "../../../assets/sheinLogo.png";

const GeneralNav = () => {
    return (
        <div>
            <div className="header-left">
                <a href="https://us.shein.com">
                    <img
                        src={sheinLogo}
                        alt="Shein Logo"
                        style={{ width: 150 }}
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