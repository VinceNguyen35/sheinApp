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

    const handleLeftArrow = () => {
        if (carouselDisplacement > 0) {
            scrollLeft();
            setRightArrow(rightArrowBlackIcon);
        }
        if (carouselDisplacement === 0) {
            setLeftArrow(leftArrowGreyIcon);
        }
    }

    const handleRightArrow = () => {
        if (carouselDisplacement < 21) {
            scrollRight();
            setLeftArrow(leftArrowBlackIcon);
        }
        if (carouselDisplacement === 21) {
            setRightArrow(rightArrowGreyIcon);
        }
    }

    return (
        <div className="categories-scroller">
            <img
                onClick={ handleLeftArrow }
                src={ leftArrow }
                alt="right arrow icon"
            />
            <img
                onClick={ handleRightArrow }
                src={ rightArrow }
                alt="right arrow icon"
            />
        </div>
    );
}
 
export default CategoriesScroller;