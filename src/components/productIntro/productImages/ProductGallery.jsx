/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { ProductContext } from "../../../context/ProductContext";

const ProductGallery = ({ setEnlargedImage }) => {
    const product = useContext(ProductContext);
    const pictures = product.pictures;

    useEffect(() => {
        setEnlargedImage(1);
    }, []);

    return (
        <div className="product-gallery">
            {pictures.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={"gallery img " + `${index + 1}`}
                    onMouseOver={() => setEnlargedImage(index + 1)}
                />
            ))}
        </div>
    );
}
 
export default ProductGallery;