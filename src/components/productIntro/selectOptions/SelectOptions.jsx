/* eslint-disable react/prop-types */
// Component Imports
import Colors from "./Colors";
import Sizes from "./Sizes";

const SelectOptions = ({
    selectedColor,
    selectedSize,
    setSelectedColor,
    setSelectedSize
}) => {
    return (
        <div className="select-options">
            <Colors
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <Sizes
                selectedSize={selectedSize}
                setSelectedSize = {setSelectedSize}
            />
        </div>
    );
}
 
export default SelectOptions;