import ReviewApproval from "./right/ReviewApproval";
import ReviewAction from "./right/ReviewAction";
import ReviewPoints from "./right/ReviewPoints";

const ReviewListItemRight = () => {
    return (
        <div>
            <h6>Right Section Here</h6>
            <ReviewApproval />
            <ReviewAction />
            <ReviewPoints />
        </div>
    );
}
 
export default ReviewListItemRight;