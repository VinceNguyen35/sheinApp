// react imports
import { useState } from "react";

// component imports
import downArrowGreyIcon from "../../../../assets/logos/downArrowGreyIcon.png";

const Categories = () => {
    const [hover, setHover] = useState("");

    return (
        <div
            className="dropdown"
            onMouseOver={() => setHover("hovering")}
            onMouseLeave={() => setHover("notHovering")}
        >
            Categories
            <img
                className={hover}
                src={downArrowGreyIcon}
                alt="directional icon for categories"
            />
        </div>
    );
}

export default Categories;