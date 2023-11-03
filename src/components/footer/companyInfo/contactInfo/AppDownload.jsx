import appleIcon from "../../../../assets/appleIcon.png";
import androidIcon from "../../../../assets/androidIcon.png";

const AppDownload = () => {
    return (
        <div>
            <a href="https://itunes.apple.com/us/app/yub-streetwear-fashion-shopping/id878577184?mt=8">
                <img
                    src={appleIcon}
                    alt="Apple icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.zzkko&hl=en">
                <img
                    src={androidIcon}
                    alt="Android icon"
                    style={{ width: 20 }}
                />
            </a>
        </div>
    );
}
 
export default AppDownload;