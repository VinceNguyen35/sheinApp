import facebookIcon from "../../../../assets/logos/facebookIcon.png";
import instagramIcon from "../../../../assets/logos/instagramIcon.png";
import twitterIcon from "../../../../assets/logos/twitterIcon.png";
import youtubeIcon from "../../../../assets/logos/youtubeIcon.png";
import pinterestIcon from "../../../../assets/logos/pinterestIcon.png";
import snapchatIcon from "../../../../assets/logos/snapchatIcon.png";
import tiktokIcon from "../../../../assets/logos/tiktokIcon.png";
import linkedinIcon from "../../../../assets/logos/linkedinIcon.png";
import messengerIcon from "../../../../assets/logos/messengerIcon.png";

const SocialMedia = () => {
    const socialMediaList = [
        {
            name: "facebook",
            icon: facebookIcon,
            link: "https://www.facebook.com/sheinus/"
        },
        {
            name: "instagram",
            icon: instagramIcon,
            link: "https://www.instagram.com/shein_us/"
        },
        {
            name: "twitter",
            icon: twitterIcon,
            link: "https://www.instagram.com/shein_us/"
        },
        {
            name: "youtube",
            icon: youtubeIcon,
            link: "https://www.youtube.com/user/sheinsidevideo"
        },
        {
            name: "pinterest",
            icon: pinterestIcon,
            link: "https://www.pinterest.com/SHEINofficial/"
        },
        {
            name: "snapchat",
            icon: snapchatIcon,
            link: "https://www.snapchat.com/add/sheinofficial"
        },
        {
            name: "tiktok",
            icon: tiktokIcon,
            link: "https://www.tiktok.com/@shein_official"
        },
        {
            name: "linkedin",
            icon: linkedinIcon,
            link: "https://www.linkedin.com/careersite/sheinus"
        },
        {
            name: "messenger",
            icon: messengerIcon,
            link: "https://www.m.me/121041328593190"
        },
    ];
    
    return (
        <div className="social-media">
            <ul>
                {socialMediaList.map((socialMedia, index) => (
                    <li key={ index }>
                        <a href={ socialMedia.link }>
                            <img
                                src={ socialMedia.icon }
                                alt={ `${ socialMedia.name }` + " icon" }
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default SocialMedia;