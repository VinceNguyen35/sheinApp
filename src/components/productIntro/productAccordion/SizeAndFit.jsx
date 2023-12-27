// React Imports
import { useState, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import plusIcon from "../../../assets/logos/plusIcon.png";
import minusIcon from "../../../assets/logos/minusIcon.png";

const SizeAndFit = () => {
    const product = useContext(ProductContext);
    const sizeAndFitHeaders = product.sizeAndFitHeaders
    const sizeAndFitData = product.sizeAndFitData;

    const [isDisplayed, setIsDisplayed] = useState(false);
    const [measurementSelected, setMeasurementSelected] = useState("IN");
    const [cmSelectionClass, setCMSelectionClass] = useState("measurement-type");
    const [inchSelectionClass, setInchSelectionClass] = useState("measurement-type selected");

    const handleMeasurementSelection = (measurement) => {
        if(measurement === "CM") {
            setMeasurementSelected("CM");
            setCMSelectionClass("measurement-type selected");
            setInchSelectionClass("measurement-type");
        } else {
            setMeasurementSelected("IN");
            setCMSelectionClass("measurement-type");
            setInchSelectionClass("measurement-type selected");
        }
    }

    const handleDataConversion = (data) => {
        // type checking
        if(typeof data == "number") {
            if (measurementSelected === "CM") {
                const newVal = data * 2.54;
                return Math.trunc(newVal * 100) / 100;
            }
        }
        return data;
    }

    return (
        <div className="accordion">
            <div
                className="accordion-header"
                onClick={ () => { setIsDisplayed(!isDisplayed) } }
            >
                <span className="accordion-header-title">Size & Fit</span>
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
                    <div className="size-and-fit">
                        <div className="size-and-fit-header">Product Measurements</div>
                        <div className="measurement-types">
                            <span
                                className={ cmSelectionClass }
                                onClick={ () => { handleMeasurementSelection("CM") } }
                            >
                                CM
                            </span>
                            <span
                                className={ inchSelectionClass }
                                onClick={ () => { handleMeasurementSelection("IN") } }
                            >
                                IN
                            </span>
                        </div>
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
                                                        { handleDataConversion(data) }
                                                        {/* { data } */}
                                                    </td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
}
 
export default SizeAndFit;