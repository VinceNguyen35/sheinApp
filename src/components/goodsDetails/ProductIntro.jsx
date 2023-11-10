/* eslint-disable react/prop-types */
import Breadcrumbs from "./productIntro/Breadcrumbs";
import ProductGallery from "./productIntro/ProductGallery";
import ProductInfo from "./productIntro/ProductInfo";
import SelectOptions from "./productIntro/SelectOptions";
import AddingProduct from "./productIntro/AddingProduct";
import ShippingInfo from "./productIntro/ShippingInfo";
import ProductAccordion from "./productIntro/ProductAccordion";

const ProductIntro = () => {
    return (
        <div>
            <Breadcrumbs />
            <ProductGallery />
            <ProductInfo />
            <SelectOptions />
            <AddingProduct />
            <ShippingInfo />
            <ProductAccordion />
        </div>
    );
}
 
export default ProductIntro;