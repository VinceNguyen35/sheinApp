import ReviewListItemLeft from "./reviewsListItem/ReviewListItemLeft";
import ReviewListItemMiddle from "./reviewsListItem/ReviewListItemMiddle";
import ReviewListItemRight from "./reviewsListItem/ReviewListItemRight";

const ReviewsListItem = () => {
    return (
        <div>
            <h5>Review List Item</h5>
            <div className="review-list-item-left">
                <ReviewListItemLeft />
            </div>
            <div className="review-list-item-middle">
                <ReviewListItemMiddle />
            </div>
            <div className="review-list-item-right">
                <ReviewListItemRight />
            </div>
        </div>
    );
}
 
export default ReviewsListItem;