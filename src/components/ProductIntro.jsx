/* eslint-disable react/prop-types */
// Component Imports
import ProductImages from "./productIntro/ProductImages";
import ProductInfo from "./productIntro/ProductInfo";
import SelectOptions from "./productIntro/SelectOptions";
import AddingProduct from "./productIntro/AddingProduct";
import ShippingInfo from "./productIntro/ShippingInfo";
import ProductAccordion from "./productIntro/ProductAccordion";

const ProductIntro = () => {
    return (
        <div className="product-intro">
            <ProductImages />
            <ProductInfo />
            <SelectOptions />
            <AddingProduct />
            <ShippingInfo />
            <ProductAccordion />
        </div>
    );
}
 
export default ProductIntro;