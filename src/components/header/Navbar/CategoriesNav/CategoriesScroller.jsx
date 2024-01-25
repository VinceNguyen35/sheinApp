/* eslint-disable react/prop-types */
// react imports
import { useState } from "react";

// img imports
import leftArrowBlackIcon from "../../../../assets/logos/leftArrowBlackIcon.png";
import leftArrowGreyIcon from "../../../../assets/logos/leftArrowGreyIcon.png";
import rightArrowBlackIcon from "../../../../assets/logos/rightArrowBlackIcon.png";
import rightArrowGreyIcon from "../../../../assets/logos/rightArrowGreyIcon.png";

const CategoriesScroller = ({
    carouselDisplacement,
    scrollLeft,
    scrollRight
}) => {
    const [leftArrow, setLeftArrow] = useState(leftArrowGreyIcon);
    const [rightArrow, setRightArrow] = useState(rightArrowBlackIcon);
    const [leftHover, setLeftHover] = useState("cannotHover");
    const [rightHover, setRightHover] = useState("");

    const handleLeftArrow = () => {
        if (carouselDisplacement > 0) {
            if (carouselDisplacement === 2) {
                setLeftArrow(leftArrowGreyIcon);
                setLeftHover("cannotHover");
            }
            scrollLeft();
            setRightArrow(rightArrowBlackIcon);
            setRightHover("");
        }
    }

    const handleRightArrow = () => {
        if (carouselDisplacement < 21) {
            if (carouselDisplacement === 18) {
                setRightArrow(rightArrowGreyIcon);
                setRightHover("cannotHover");
            }
            scrollRight();
            setLeftArrow(leftArrowBlackIcon);
            setLeftHover("");
        }
    }

    return (
        <div className="categories-scroller">
            <img
                className={leftHover}
                onClick={handleLeftArrow}
                src={leftArrow}
                alt="right arrow icon"
            />
            <img
                className={rightHover}
                onClick={handleRightArrow}
                src={rightArrow}
                alt="right arrow icon"
            />
        </div>
    );
}

export default CategoriesScroller;