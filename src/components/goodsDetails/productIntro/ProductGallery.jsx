/* eslint-disable react/prop-types */
const ProductGallery = ({product}) => {
    const gallery = product.pictures;
    return (
        <div>
            <h5>Product Gallery Here</h5>
            {gallery.map((img, index) => (
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