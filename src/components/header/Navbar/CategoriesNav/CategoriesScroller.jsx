import leftArrowBlackIcon from "../../../../assets/logos/leftArrowBlackIcon.png";
import leftArrowGreyIcon from "../../../../assets/logos/leftArrowGreyIcon.png";
import rightArrowBlackIcon from "../../../../assets/logos/rightArrowBlackIcon.png";
import rightArrowGreyIcon from "../../../../assets/logos/rightArrowGreyIcon.png";

const CategoriesScroller = () => {
    return (
        <div className="categories-scroller">
            <img
                src={ leftArrowGreyIcon }
                alt="right arrow icon"
            />
            <img
                src={ rightArrowBlackIcon }
                alt="right arrow icon"
            />
        </div>
    );
}
 
export default CategoriesScroller;