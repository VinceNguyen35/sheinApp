// react imports
import { useState } from "react";

// img imports
import leftArrowBlackIcon from "../../../../assets/logos/leftArrowBlackIcon.png";
import leftArrowGreyIcon from "../../../../assets/logos/leftArrowGreyIcon.png";
import rightArrowBlackIcon from "../../../../assets/logos/rightArrowBlackIcon.png";
import rightArrowGreyIcon from "../../../../assets/logos/rightArrowGreyIcon.png";

const CategoriesScroller = () => {
    const [leftArrow, setLeftArrow] = useState(leftArrowGreyIcon);
    const [rightArrow, setRightArrow] = useState(rightArrowBlackIcon);

    const handleLeftArrow = () => {
        if(leftArrow === leftArrowGreyIcon) {
            setLeftArrow(leftArrowBlackIcon);
        } else {
            setLeftArrow(leftArrowGreyIcon);
        }
    }

    const handleRightArrow = () => {
        if(rightArrow === rightArrowGreyIcon) {
            setRightArrow(rightArrowBlackIcon);
        } else {
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