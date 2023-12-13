import Description from "./productAccordion/Description";
import SizeAndFit from "./productAccordion/SizeAndFit";
import AboutStore from "./productAccordion/AboutStore";

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