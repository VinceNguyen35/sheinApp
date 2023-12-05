import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductInfo = () => {
    const product = useContext(ProductContext);

    return (
        <div>
            <h6>Product Info Here</h6>
            <div>Name: { product.productName }</div>
            <div>SKU: { product.SKU }</div>
            <div>
                Avg. Rating: { product.averageRating } ({ product.numberOfReviews } Reviews)
            </div>

        </div>
    );
}

export default ProductInfo;