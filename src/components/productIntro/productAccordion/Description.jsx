import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const Description = () => {
    const product = useContext(ProductContext);
    const description = product.description;

    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className="accordion-description">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                Description
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