import appleIcon from "../../../../assets/logos/appleIcon.png";
import androidIcon from "../../../../assets/logos/androidIcon.png";

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
        <div className="app-download">
            <ul>
                { appList.map((app, index) => (
                    <li key={ index }>
                        <a href={ app.link }>
                            <img
                                src={ app.icon }
                                alt={ `${ app.name }` + " icon" }
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default AppDownload;