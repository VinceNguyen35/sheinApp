/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/ProductContext";

const ProductGallery = ({ setEnlargedImage }) => {
    const product = useContext(ProductContext);
    const pictures = product.pictures;

    useEffect(() => {
        setEnlargedImage(pictures[0]);
    }, []);

    return (
        <div className="product-gallery">
            <h5>Product Gallery Here</h5>
            {pictures.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={"gallery img " + `${index}`}
                    onMouseOver={() => setEnlargedImage(pictures[index])}
                />
            ))}
        </div>
    );
}
 
export default ProductGallery;