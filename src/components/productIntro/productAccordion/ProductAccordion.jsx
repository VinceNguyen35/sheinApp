import Description from "./Description";
import SizeAndFit from "./SizeAndFit";
import AboutStore from "./AboutStore";

const ProductAccordion = () => {
    return (
        <div className="product-accordion">
            <Description />
            <SizeAndFit />
            <AboutStore />
        </div>
    );
}
 
export default ProductAccordion;