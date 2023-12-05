/* eslint-disable react/prop-types */
// React Imports
import { useState } from "react";

// Component Imports
import Breadcrumbs from "./productIntro/Breadcrumbs";
import ProductGallery from "./productIntro/ProductGallery";
import EnlargedImage from "./productIntro/EnlargedImage";
import ProductInfo from "./productIntro/ProductInfo";
import SelectOptions from "./productIntro/SelectOptions";
import AddingProduct from "./productIntro/AddingProduct";
import ShippingInfo from "./productIntro/ShippingInfo";
import ProductAccordion from "./productIntro/ProductAccordion";

const ProductIntro = () => {
    const [enlargedImage, setEnlargedImage] = useState();

    return (
        <div className="product-intro">
            <Breadcrumbs />
            <ProductGallery
                setEnlargedImage={ setEnlargedImage }
            />
            <EnlargedImage
                enlargedImage={ enlargedImage }
            />
            <ProductInfo />
            <SelectOptions />
            <AddingProduct />
            <ShippingInfo />
            <ProductAccordion />
        </div>
    );
}
 
export default ProductIntro;