/* eslint-disable react/prop-types */
// React Imports
import { useState, useContext } from "react";

// Context Imports
import { MobileContext } from "../../context/MobileContext";

// Component Imports
import ProductImages from "./productImages/ProductImages";
import ProductInfo from "./ProductInfo";
import SelectOptions from "./selectOptions/SelectOptions";
import AddingProduct from "./AddingProduct";
import ShippingInfo from "./ShippingInfo";
import ProductAccordion from "./productAccordion/ProductAccordion";

const ProductIntro = () => {

    // State Variables
    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    // Context Variables
    const isMobile = useContext(MobileContext);

    // Setting layout classes based on screen size
    const productIntroClass = isMobile ? "row" : "product-intro";
    const productIntroLeftColClass = "product-intro-col-left";
    const productIntroRightColClass = isMobile ? "col-12-xs" : "product-intro-col-right";

    return (
        <div className={productIntroClass}>
            <div className={productIntroLeftColClass}>
                <ProductImages />
            </div>
            <div className={productIntroRightColClass}>
                <ProductInfo />
                <SelectOptions
                    selectedColor={selectedColor}
                    selectedSize={selectedSize}
                    setSelectedColor={setSelectedColor}
                    setSelectedSize={setSelectedSize}
                />
                <AddingProduct
                    selectedColor={selectedColor}
                    selectedSize={selectedSize}
                />
                <ShippingInfo />
                <ProductAccordion />
            </div>
        </div>
    );
}
 
export default ProductIntro;