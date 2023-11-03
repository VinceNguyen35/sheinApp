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
            <a href="https://www.facebook.com/sheinus/">
                <img
                    src={facebookIcon}
                    alt="Facebook icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.instagram.com/shein_us/">
                <img
                    src={instagramIcon}
                    alt="Instagram icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://mobile.twitter.com/SHEIN_News">
                <img
                    src={twitterIcon}
                    alt="Twitter icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.youtube.com/user/sheinsidevideo">
                <img
                    src={youtubeIcon}
                    alt="Youtube icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.pinterest.com/SHEINofficial/">
                <img
                    src={pinterestIcon}
                    alt="Pinterest icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.snapchat.com/add/sheinofficial">
                <img
                    src={snapchatIcon}
                    alt="Snapchat icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.tiktok.com/@shein_official">
                <img
                    src={tiktokIcon}
                    alt="Tiktok icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.linkedin.com/careersite/sheinus">
                <img
                    src={linkedinIcon}
                    alt="Linkedin icon"
                    style={{ width: 20 }}
                />
            </a>
            <a href="https://www.m.me/121041328593190">
                <img
                    src={messengerIcon}
                    alt="Messenger icon"
                    style={{ width: 20 }}
                />
            </a>
        </div>
    );
}
 
export default SocialMedia;