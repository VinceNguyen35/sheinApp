// React Imports
import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import plusIcon from "../../../assets/logos/plusIcon.png";

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
                <img src={ plusIcon } alt="plus icon" />
            </div>
            {
                isDisplayed &&
                <div className="accordion-details">
                    {
                        description.map((item, index) => (
                            <div
                                key={index}
                            >
                                {item.title}: {item.detail}
                            </div>
                        ))
                    }
                </div>
            }
        </div>
    );
}
 
export default Description;