// React Imports
import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import plusIcon from "../../../assets/logos/plusIcon.png";

const SizeAndFit = () => {
    const product = useContext(ProductContext);
    const sizeAndFitHeaders = product.sizeAndFitHeaders
    const sizeAndFitData = product.sizeAndFitData;

    const [isDisplayed, setIsDisplayed] = useState(false);

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                <span className="accordion-header-title">Size & Fit</span>
                <img src={ plusIcon } alt="plus icon" />
            </div>
            {
                isDisplayed &&
                <div className="accordion-details">
                    <h6>Product Measurements</h6>
                    <div><span> CM </span><span> IN </span></div>
                    <table>
                        <thead>
                            <tr>
                                {
                                    sizeAndFitHeaders.map((header, index) => (
                                        <th
                                            key={index}
                                        >
                                            {header}
                                        </th>
                                    ))
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sizeAndFitData.map((row, index) => (
                                    <tr
                                        key={index}
                                    >
                                        {
                                            row.map((data, index) => (
                                                <td
                                                    key={index}
                                                >
                                                    {data}
                                                </td>
                                            ))
                                        }
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}
 
export default SizeAndFit;