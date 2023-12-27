// React Imports
import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import plusIcon from "../../../assets/logos/plusIcon.png";
import minusIcon from "../../../assets/logos/minusIcon.png";

const AboutStore = () => {
    const product = useContext(ProductContext);
    const storeDetails = product.storeDetails;

    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                <span className="accordion-header-title">About Store</span>
                {
                    !isDisplayed &&
                    <img src={ plusIcon } alt="plus icon" />
                }
                {
                    isDisplayed &&
                    <img src={ minusIcon } alt="minus icon" />
                }
            </div>
            {
                isDisplayed &&
                <div className="accordion-details">
                    <div className="store-details">
                        <div className="store-details-top-level">
                            <img
                                src={storeDetails.storeImg}
                                alt={`${storeDetails.storeName} img`}
                            />
                            <div className="white-space"></div>
                            <div className="info-box">
                                <div className="info-box-header">
                                    <div className="store-name">
                                        {
                                            storeDetails.storeName
                                        }
                                    </div>
                                    <div className="store-tags">
                                        {
                                            storeDetails.storeTags.map((tag, index) => (
                                                <div
                                                    key={index}
                                                    className="store-tag"
                                                >
                                                    {tag}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="info-box-details">
                                    <div className="detail-item">
                                        <span className="detail-data">{storeDetails.storeRating}</span>
                                        <span className="detail-type">Rating</span>
                                    </div>
                                    <span className="detail-item-separation">|</span>
                                    <div className="detail-item">
                                        <span className="detail-data">{storeDetails.storeProducts}</span>
                                        <span className="detail-type">Items</span>
                                    </div>
                                    <span className="detail-item-separation">|</span>
                                    <div className="detail-item">
                                        <span className="detail-data">{storeDetails.storeFollowers}</span>
                                        <span className="detail-type">Followers</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="store-details-bottom-level">
                            <a
                                href={storeDetails.storeLink}
                            >
                                <div className="store-detail-button">All Items</div>
                            </a>
                            <div className="white-space"></div>
                            <a
                                href=""
                            >
                                <div className="store-detail-button">+ Follow</div>
                            </a>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default AboutStore;