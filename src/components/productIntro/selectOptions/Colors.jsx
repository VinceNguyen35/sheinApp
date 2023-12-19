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

    const selectedColorClasses = (color) => {
        if(color === selectedColor) {
            return "color selected-color"
        } else {
            return "color";
        }
    }

    return (
        <div className="select-color">
            <div className="select-color-header">
                <span className="select-color-title">Color:</span>
                <span className="select-color-selected">{ selectedColor.name }</span>
            </div>
            <div className="colors-selection">
                {
                    colors.map((color, index) => (
                        <div
                            key={index}
                            className={ selectedColorClasses(color) }
                        >
                            <img
                                src={color.picture}
                                alt={color.name}
                                onClick={() => { setSelectedColor(colors[index]); }}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Colors;