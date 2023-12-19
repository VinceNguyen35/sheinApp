/* eslint-disable react/prop-types */
// Component Imports
import ProductImages from "./productImages/ProductImages";
import ProductInfo from "./ProductInfo";
import SelectOptions from "./selectOptions/SelectOptions";
import AddingProduct from "./AddingProduct";
import ShippingInfo from "./ShippingInfo";
import ProductAccordion from "./productAccordion/ProductAccordion";

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