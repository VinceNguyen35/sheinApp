import NewUserCoupon from "../../assets/NewUserCoupon.png";

const TopBanner = () => {
    return (
        <div className="top-banner">
            <img
                src={NewUserCoupon}
                alt="Banner used to give new users a discount"
            />
        </div>
    );
}
 
export default TopBanner;