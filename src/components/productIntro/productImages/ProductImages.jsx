// React Imports
import { useState, useEffect, useContext } from "react";

// Context Imports
import { MobileContext } from  "../../../context/MobileContext";

// Component Imports
import ProductGallery from "./ProductGallery";
import EnlargedImage from "./EnlargedImage";

const ProductImages = () => {
    const [enlargedImage, setEnlargedImage] = useState();

    const isMobile = useContext(MobileContext);

    useEffect(() => {
        setEnlargedImage(0);
    }, []);

    return (
        <div className="product-images">
            {
                !isMobile &&
                <ProductGallery setEnlargedImage={setEnlargedImage} />
            }
            <EnlargedImage
                enlargedImage={ enlargedImage }
                setEnlargedImage={ setEnlargedImage }
            />
        </div>
    );
}
 
export default ProductImages;