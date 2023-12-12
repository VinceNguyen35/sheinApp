/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const Colors = () => {
    const product = useContext(ProductContext);
    const productName = product.productName;
    const colors = product.colors;

    const [selectedColor, setSelectedColor] = useState(colors[1]);

    useEffect(() => {
        if (productName === "Manfinity Homme Men Letter Patched Detail Tee") {
            setSelectedColor(colors[2]);
        } else if (productName === "Flap Pocket Cargo Pants") {
            setSelectedColor(colors[1]);
        } else if (productName === "SHEIN Belle Solid Draped Backless Halterneck Satin Bridesmaid Dress") {
            setSelectedColor(colors[1]);
        } else {
            setSelectedColor("");
        }
    },[]);

    return (
        <div className="colors-section">
            <div className="colors-header">
                <span>Color: </span>
                <span>{ selectedColor.name }</span>
            </div>
            {
                colors.map((color, index) => (
                    <div
                        key={index}
                    >
                        <img
                            src={ color.picture }
                            alt={ color.name }
                            onClick={() => { setSelectedColor(colors[index]); } }
                        />
                    </div>
                ))
            }
        </div>
    );
}
 
export default Colors;