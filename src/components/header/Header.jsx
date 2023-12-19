import TopBanner from "./TopBanner";
import Navbar from "./navbar/Navbar";

const header = () => {
    return (
        <div className="header">
            <TopBanner />
            <Navbar />
        </div>
    );
}
 
export default header;