import Breadcrumbs from "./productIntro/Breadcrumbs";
import ProductGallery from "./productIntro/ProductGallery";
import ProductInfo from "./productIntro/ProductInfo";
import SelectionInfo from "./productIntro/SelectionInfo";
import ShippingInfo from "./productIntro/ShippingInfo";
import AddingProduct from "./productIntro/AddingProduct";
import ProductAccordion from "./productIntro/ProductAccordion";

const ProductIntro = () => {
    return (
        <div>
            <Breadcrumbs />
            <ProductGallery />
            <ProductInfo />
            <SelectionInfo />
            <ShippingInfo />
            <AddingProduct />
            <ProductAccordion />
        </div>
    );
}
 
export default ProductIntro;