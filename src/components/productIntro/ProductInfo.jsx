// React Imports
import { useContext } from "react";

// Context Imports
import { ProductContext } from "../../context/ProductContext";
import { MobileContext } from "../../context/MobileContext";

// Image Imports
import starIconEmpty from "../../assets/logos/starIconEmpty.png";
import starIconHalf from "../../assets/logos/starIconHalf.png";
import starIconFilled from "../../assets/logos/starIconFilled.png";
import rightArrowGreyIcon from "../../assets/logos/rightArrowGreyIcon.png";

const ProductInfo = () => {
    const product = useContext(ProductContext);
    const isMobile = useContext(MobileContext);

    // Returns an array which defines which star icon to use for each rating
    const handleStarRating = (averageRating) => {
        // default case is a 5 star rating
        const starRating = [
            starIconFilled,
            starIconFilled,
            starIconFilled,
            starIconFilled,
            starIconFilled
        ];

        const averageRatingFloor = Math.floor(averageRating);
        const averageRatingRemainder = averageRating % 1;

        // Rating decimal from .00 - .24 will get an empty star for its remainder
        // Rating decimal from .25 - .75 will get a half star for its remainder
        // Rating decimal from .76 - .99 will get a full star for its remainder

        for(let i = 1; i < 6; i++) {
            if (averageRating > i) {
                starRating[i - 1] = starIconFilled;
            } else if(averageRatingFloor + 1 === i) {
                if (averageRatingRemainder < 0.25) {
                    starRating[i - 1] = starIconEmpty;
                } else if (averageRatingRemainder < 0.76) {
                    starRating[i - 1] = starIconHalf;
                } else {
                    starRating[i - 1] = starIconFilled;
                }
            } else {
                starRating[i - 1] = starIconEmpty;
            }
            
        }

        return starRating;
    }

    return (
        <div className="product-info">
            {
                !isMobile &&
                <div className="product-info-desktop">
                    <div className="product-name">{product.productName}</div>
                    <div className="product-info-minor-details">
                        <div className="sku">SKU: {product.SKU}</div>
                        <div className="ratings">
                            {
                                handleStarRating(product.averageRating).map((rating, index) => (
                                    <img
                                        key={index}
                                        src={rating}
                                        alt="star"
                                    />
                                ))
                            }
                            {product.averageRating} ({product.numberOfReviews} Reviews)
                        </div>
                    </div>
                    <div className="pricing-details">
                        <span className="discounted-price">${ product.discountPrice }</span>
                        <div className="discount-wrapper">
                            <div className="discount-estimation">
                                Estimated
                            </div>
                            <div className="discount-percentage">
                                -{product.discountPercentage}%
                            </div>
                        </div>
                        <div className="original-price">
                            ${product.price}
                            <img src={rightArrowGreyIcon} alt="right arrow" />
                        </div>
                    </div>
                    <div className="discount-details">
                        30% OFF For orders $9.90+ • 25% OFF For orders %59.00+
                        <img src={rightArrowGreyIcon} alt="right arrow" />
                    </div>
                </div>
            }
            {
                isMobile &&
                <div className="product-info-mobile">
                    <div className="pricing-details">
                        <span className="discounted-price">${ product.discountPrice }</span>
                        <div className="discount-wrapper">
                            <div className="discount-estimation">
                                Estimated
                            </div>
                            <div className="discount-percentage">
                                -{product.discountPercentage}%
                            </div>
                        </div>
                        <div className="original-price">
                            ${product.price}
                            <img src={rightArrowGreyIcon} alt="right arrow" />
                        </div>
                    </div>
                    <div className="goods-name">
                        <div className="product-name">{product.productName}</div>
                        <div className="ratings">
                            <img src={starIconFilled} alt="star"/>
                            {product.averageRating} ({product.numberOfReviews})
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default ProductInfo;