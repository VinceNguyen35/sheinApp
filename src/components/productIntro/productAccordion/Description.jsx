// React Imports
import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import plusIcon from "../../../assets/logos/plusIcon.png";
import minusIcon from "../../../assets/logos/minusIcon.png";

const Description = () => {
    const product = useContext(ProductContext);
    const description = product.description;

    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                <span className="accordion-header-title">Description</span>
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
                    <div className="description">
                        {
                            description.map((item, index) => (
                                <div
                                    key={index}
                                    className="description-table-item"
                                >
                                    <div className="description-table-item-key">{ item.title }: </div>
                                    <div className="description-table-item-val">{ item.detail }</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
        </div>
    );
}
 
export default Description;