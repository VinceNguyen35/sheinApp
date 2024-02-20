/* eslint-disable react-hooks/exhaustive-deps */

// React Imports
import { useState, useEffect, useContext } from "react";

// Context Imports
import { ProductContext } from "../../../context/ProductContext";

const Sizes = () => {
    const product = useContext(ProductContext);
    const sizes = product.sizes;

    const [selectedSize, setSelectedSize] = useState("");

    useEffect(() => {
        setSelectedSize(sizes[0]);
    }, []);

    const selectedSizeClasses = (size) => {
        if (size === selectedSize) {
            return "select-size-radio selected-size"
        } else {
            return "select-size-radio";
        }
    }

    return (
        <div className="select-size">
            <div className="select-size-header">Size</div>
            {
                sizes.map((size, index) => (
                    <span
                        key={ index }
                        className={ selectedSizeClasses(size) }
                        onClick={ () => { setSelectedSize(size) } }
                    >
                        <div className="select-size-text">
                            { size }
                        </div>
                    </span>
                ))
            }
        </div>
    );
}
 
export default Sizes;