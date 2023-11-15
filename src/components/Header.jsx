import TopBanner from "./header/TopBanner";
import Navbar from "./header/Navbar";

const header = () => {
    return (
        <div className="header">
            <TopBanner />
            <Navbar />
        </div>
    );
}
 
export default header;