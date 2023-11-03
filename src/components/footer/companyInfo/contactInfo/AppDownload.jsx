import appleIcon from "../../../../assets/appleIcon.png";
import androidIcon from "../../../../assets/androidIcon.png";

const AppDownload = () => {
    return (
        <div>
            <img
                src={appleIcon}
                alt="Apple icon"
                style={{ width: 20 }}
            />
            <img
                src={androidIcon}
                alt="Android icon"
                style={{ width: 20 }}
            />
        </div>
    );
}
 
export default AppDownload;