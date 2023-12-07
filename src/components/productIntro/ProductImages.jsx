// React Imports
import { useState } from "react";

// Component Imports
import ProductGallery from "./productImages/ProductGallery";
import EnlargedImage from "./productImages/EnlargedImage";

const ProductImages = () => {
    const [enlargedImage, setEnlargedImage] = useState();

    return (
        <div className="product-images">
            <ProductGallery
                setEnlargedImage={ setEnlargedImage }
            />
            <EnlargedImage
                enlargedImage={ enlargedImage }
            />
        </div>
    );
}
 
export default ProductImages;