import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const AboutStore = () => {
    const product = useContext(ProductContext);
    const storeDetails = product.storeDetails;

    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className="accordion-about-store">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                About Store
            </div>
            {
                isDisplayed &&
                <div className="accordion-details">
                    <img
                        src={storeDetails.storeImg}
                        alt={`${storeDetails.storeName} img`}
                    />
                    <div>
                        <h4>
                            {
                                storeDetails.storeName
                            }
                            {
                                storeDetails.storeTags.map((tag, index) => (
                                    <div
                                        key={index}
                                    >
                                        {tag}
                                    </div>
                                ))
                            }
                        </h4>
                    </div>
                    <div>
                        {storeDetails.storeRating} Rating
                        {storeDetails.storeProducts} Products
                        {storeDetails.storeFollowers} Followers
                    </div>
                    <a
                        href={storeDetails.storeLink}
                    >
                        <button>All Items</button>
                    </a>
                    <button>+ Follow</button>
                </div>
            }
        </div>
    );
}
 
export default AboutStore;