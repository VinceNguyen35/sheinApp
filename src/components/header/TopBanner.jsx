// Image Imports
import NewUserCoupon from "../../assets/NewUserCoupon.png";

const TopBanner = () => {
    return (
        <div className="top-banner">
            <a href="https://us.shein.com/campaign/new-users?type=immersive&src_module=Women&src_identifier=on%3DIMAGE_COMPONENT%60cn%3Dtopbanner%60hz%3D0%60ps%3D1_1%60jc%3DactivityOld_new-users&src_tab_page_id=page_goods_detail1701201118296&ici=CCCSN%3DWomen_ON%3DIMAGE_COMPONENT_OI%3D12579399_CN%3DONE_IMAGE_COMPONENT_TI%3D50001_aod%3D0_PS%3D1-1_ABT%3D0">
                <img
                    src={NewUserCoupon}
                    alt="Banner used to give new users a discount"
                />
            </a>
        </div>
    );
}
 
export default TopBanner;