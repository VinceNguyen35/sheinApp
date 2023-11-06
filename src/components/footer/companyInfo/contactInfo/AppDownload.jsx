import appleIcon from "../../../../assets/appleIcon.png";
import androidIcon from "../../../../assets/androidIcon.png";

const AppDownload = () => {
    const appList = [
        {
            name: "apple",
            icon: appleIcon,
            link: "https://itunes.apple.com/us/app/yub-streetwear-fashion-shopping/id878577184?mt=8"
        },
        {
            name: "android",
            icon: androidIcon,
            link: "https://play.google.com/store/apps/details?id=com.zzkko&hl=en"
        }
    ];

    return (
        <div>
            {appList.map((app, index) => (
                <a
                    key={index}
                    href={app.link}
                >
                    <img
                        src={app.icon}
                        alt={`${app.name}` + " icon"}
                        style={{ width: 20 }}
                    />
                </a>
            ))}
        </div>
    );
}
 
export default AppDownload;