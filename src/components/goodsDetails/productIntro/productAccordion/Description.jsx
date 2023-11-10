import { useContext } from "react";
import { ProductContext } from "../../../../context/ProductContext";

const Description = () => {
    const product = useContext(ProductContext);
    const description = product.description;

    return (
        <div>
            <h6>Description Here!</h6>
            {
                description.map((item, index) => (
                    <div
                        key={index}
                    >
                        { item.title }: { item.detail }
                    </div>
                ))
            }
        </div>
    );
}
 
export default Description;