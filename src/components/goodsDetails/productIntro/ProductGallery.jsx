/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const ProductGallery = () => {
    const product = useContext(ProductContext);
    const pictures = product.pictures;

    return (
        <div>
            <h5>Product Gallery Here</h5>
            {pictures.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={"gallery img " + `${index}`}
                    style={{ width: 40 }}
                />
            ))}
        </div>
    );
}
 
export default ProductGallery;