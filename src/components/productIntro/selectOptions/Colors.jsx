/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const Colors = ({selectedColor, setSelectedColor}) => {
    const product = useContext(ProductContext);
    const colors = product.colors;

    useEffect(() => {
        setSelectedColor(colors[1]);
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
                            onClick={() => { setSelectedColor(colors[index]); }}
                        >
                            <img
                                src={color.picture}
                                alt={color.name}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Colors;