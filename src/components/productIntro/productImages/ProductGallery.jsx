/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext";

const ProductGallery = ({ setEnlargedImage }) => {
    const product = useContext(ProductContext);
    const pictures = product.pictures;

    useEffect(() => {
        setEnlargedImage(0);
    }, []);

    return (
        <div className="product-gallery">
            {pictures.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={"gallery img " + `${index}`}
                    onMouseOver={() => setEnlargedImage(index)}
                />
            ))}
        </div>
    );
}
 
export default ProductGallery;