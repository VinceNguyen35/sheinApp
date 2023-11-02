import StarRating from "../../StarRating";
import ReviewRateFit from "./middle/ReviewRateFit";
import ReviewMediaList from "./middle/ReviewMediaList";

const ReviewListItemMiddle = () => {
    return (
        <div>
            <h6>Middle Section Here</h6>
            <StarRating />
            <h6>Output the Review Text Here</h6>
            <ReviewRateFit />
            <ReviewMediaList />
        </div>
    );
}
 
export default ReviewListItemMiddle;