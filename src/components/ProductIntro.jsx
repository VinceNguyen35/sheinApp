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
            <div className="product-intro-col-left">
                <ProductImages />
            </div>
            <div className="product-intro-col-right">
                <ProductInfo />
                <SelectOptions />
                <AddingProduct />
                <ShippingInfo />
                <ProductAccordion />
            </div>
        </div>
    );
}
 
export default ProductIntro;