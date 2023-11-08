/* eslint-disable react/prop-types */
import Breadcrumbs from "./productIntro/Breadcrumbs";
import ProductGallery from "./productIntro/ProductGallery";
import ProductInfo from "./productIntro/ProductInfo";
import Colors from "./productIntro/Colors";
import SelectionInfo from "./productIntro/SelectionInfo";
import ShippingInfo from "./productIntro/ShippingInfo";
import AddingProduct from "./productIntro/AddingProduct";
import ProductAccordion from "./productIntro/ProductAccordion";

const ProductIntro = ({product}) => {
    return (
        <div>
            <Breadcrumbs />
            <ProductGallery pictures={product.pictures}/>
            <ProductInfo />
            <Colors
                colors={product.colors}
                colorsPictures={product.colorsPictures}
            />
            <SelectionInfo />
            <ShippingInfo />
            <AddingProduct />
            <ProductAccordion />
        </div>
    );
}
 
export default ProductIntro;