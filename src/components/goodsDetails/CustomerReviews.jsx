import AverageRatings from "./customerReviews/AverageRatings";
import ReviewSelections from "./customerReviews/ReviewSelections";
import ReviewTags from "./customerReviews/ReviewTags";
import ReviewsList from "./customerReviews/ReviewsList";
import ReviewsPageList from "./customerReviews/ReviewsPageList";

const CustomerReviews = () => {
    return (
        <div>
            <h2>Customer Reviews</h2>
            <AverageRatings />
            <ReviewSelections />
            <ReviewTags />
            <ReviewsList />
            <ReviewsPageList />
        </div>
    );
}
 
export default CustomerReviews;