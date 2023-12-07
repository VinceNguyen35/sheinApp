import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductInfo = () => {
    const product = useContext(ProductContext);

    return (
        <div className="product-info">
            <div className="product-name">{ product.productName }</div>
            <div className="sku">SKU: { product.SKU }</div>
            <div className="average-rating">
                { product.averageRating } ({ product.numberOfReviews } Reviews)
            </div>

        </div>
    );
}

export default ProductInfo;