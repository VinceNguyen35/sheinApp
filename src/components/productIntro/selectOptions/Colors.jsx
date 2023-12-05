/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const Colors = () => {
    const product = useContext(ProductContext);
    const colors = product.colors;

    return (
        <div>
            <h6>Colors Here</h6>
            {
                colors.map((color, index) => (
                    <div
                        key={index}
                    >
                        { color.name }
                        <img
                            src={ color.picture }
                            alt={ color.name }
                        />
                    </div>
                ))
            }
        </div>
    );
}
 
export default Colors;