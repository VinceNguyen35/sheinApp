import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";

const Sizes = () => {
    const product = useContext(ProductContext);
    const sizes = product.sizes;

    return (
        <div>
            <h6>Sizes Here</h6>
            {
                sizes.map((size, index) => (
                    <div
                        key={ index }
                    >
                        { size }
                    </div>
                ))
            }
        </div>
    );
}
 
export default Sizes;