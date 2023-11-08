/* eslint-disable react/prop-types */
// Component Imports
import ProductIntro from "./goodsDetails/ProductIntro";
import CustomerReviews from "./goodsDetails/CustomerReviews";

const GoodsDetails = ({product}) => {
    return (
        <div>
            <ProductIntro product={product}/>
            <CustomerReviews />
        </div>
    );
}
 
export default GoodsDetails;