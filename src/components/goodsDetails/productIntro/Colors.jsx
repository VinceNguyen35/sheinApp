/* eslint-disable react/prop-types */
import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const Colors = () => {
    const product = useContext(ProductContext);
    const colors = product.colors;
    const colorsPictures = product.colorsPictures;

    return (
        <div>
            <h4>Color: </h4>
            {
                colors.map((color, index) => (
                    <div key={index}>{color}</div>
                ))
            }
            {
                colorsPictures.map((colorPicture, index) => (
                    <img
                        key={index}
                        src={colorPicture}
                        alt={colorPicture}
                    />
                ))
            }
        </div>
    );
}
 
export default Colors;