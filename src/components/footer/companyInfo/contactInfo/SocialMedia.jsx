import facebookIcon from "../../../../assets/facebookIcon.png";
import instagramIcon from "../../../../assets/instagramIcon.png";
import twitterIcon from "../../../../assets/twitterIcon.png";
import youtubeIcon from "../../../../assets/youtubeIcon.png";
import pinterestIcon from "../../../../assets/pinterestIcon.png";
import snapchatIcon from "../../../../assets/snapchatIcon.png";
import tiktokIcon from "../../../../assets/tiktokIcon.png";
import linkedinIcon from "../../../../assets/linkedinIcon.png";
import messengerIcon from "../../../../assets/messengerIcon.png";

const SocialMedia = () => {
    return (
        <div>
            <img
                src={facebookIcon}
                alt="Facebook icon"
                style={{ width: 20 }}
            />
            <img
                src={instagramIcon}
                alt="Instagram icon"
                style={{ width: 20 }}
            />
            <img
                src={twitterIcon}
                alt="Twitter icon"
                style={{ width: 20 }}
            />
            <img
                src={youtubeIcon}
                alt="Youtube icon"
                style={{ width: 20 }}
            />
            <img
                src={pinterestIcon}
                alt="Pinterest icon"
                style={{ width: 20 }}
            />
            <img
                src={snapchatIcon}
                alt="Snapchat icon"
                style={{ width: 20 }}
            />
            <img
                src={tiktokIcon}
                alt="Tiktok icon"
                style={{ width: 20 }}
            />
            <img
                src={linkedinIcon}
                alt="Linkedin icon"
                style={{ width: 20 }}
            />
            <img
                src={messengerIcon}
                alt="Messenger icon"
                style={{ width: 20 }}
            />
        </div>
    );
}
 
export default SocialMedia;