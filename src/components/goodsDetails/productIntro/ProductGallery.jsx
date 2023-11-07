import manfinity_img1 from "../../../assets/products/manfinity/manfinity_img1.webp";
import manfinity_img2 from "../../../assets/products/manfinity/manfinity_img2.webp";
import manfinity_img3 from "../../../assets/products/manfinity/manfinity_img3.webp";
import manfinity_img4 from "../../../assets/products/manfinity/manfinity_img4.webp";
import manfinity_img5 from "../../../assets/products/manfinity/manfinity_img5.webp";
import manfinity_img6 from "../../../assets/products/manfinity/manfinity_img6.webp";
import manfinity_img7 from "../../../assets/products/manfinity/manfinity_img7.webp";

const ProductGallery = () => {
    const manfinity = [
        manfinity_img1,
        manfinity_img2,
        manfinity_img3,
        manfinity_img4,
        manfinity_img5,
        manfinity_img6,
        manfinity_img7,
    ];
    return (
        <div>
            <h5>Product Gallery Here</h5>
            {manfinity.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    alt={"manfinity img " + `${index}`}
                    style={{ width: 40 }}
                />
            ))}
        </div>
    );
}
 
export default ProductGallery;