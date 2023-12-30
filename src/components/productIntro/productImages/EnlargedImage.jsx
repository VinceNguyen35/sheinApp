/* eslint-disable react/prop-types */

// React Imports
import { useState, useEffect, useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

// Img Imports
import leftArrowBlackIcon from "../../../assets/logos/leftArrowBlackIcon.png";
import rightArrowBlackIcon from "../../../assets/logos/rightArrowBlackIcon.png";

const EnlargedImage = ({ enlargedImage, setEnlargedImage }) => {
    const product = useContext(ProductContext);
    const pictures = product.pictures;

    const [displaySwiper, setDisplaySwiper] = useState(false);
    const [enlargedImagePosition, setEnlargedImagePosition] = useState(0);
    const [transitionTime, setTransitionTime] = useState(0);

    useEffect(() => {
        const newEnlargedImagePosition = enlargedImage * 384;
        setTransitionTime(0);
        setEnlargedImagePosition(newEnlargedImagePosition);
    }, [enlargedImage]);

    const handleLeftSwiper = () => {
        const newEnlargedImage = enlargedImage--;
        const newEnlargedImagePosition = enlargedImagePosition - 384;
        setTransitionTime(0.3);
        setEnlargedImage(newEnlargedImage);
        setEnlargedImagePosition(newEnlargedImagePosition);
    }

    const handleRightSwiper = () => {
        const newEnlargedImage = enlargedImage++;
        const newEnlargedImagePosition = enlargedImagePosition + 384;
        setTransitionTime(0.3);
        setEnlargedImage(newEnlargedImage);
        setEnlargedImagePosition(newEnlargedImagePosition);
    }

    return (
        <div
            className="enlarged-image-section"
            onMouseEnter={() => setDisplaySwiper(true)}
            onMouseLeave={() => setDisplaySwiper(false)}
        >
            <div className="enlarged-image-swiper">
                <div
                    className="enlarged-image-content"
                    style={{
                        transition: "transform " + transitionTime + "s",
                        transform: "translate(-" + enlargedImagePosition + "px)"
                    }}
                >
                    {pictures.map((img, index) => (
                        <img
                            key={index}
                            className="enlarged-image"
                            src={img}
                            alt={"gallery img " + `${index}`}
                        />
                    ))}
                </div>
            </div>
            {
                displaySwiper &&
                <div
                    className="swiper-icon-left"
                    onClick={ handleLeftSwiper }
                >
                    <img src={leftArrowBlackIcon} alt="left arrow" />
                </div>
            }
            {
                displaySwiper &&
                <div
                    className="swiper-icon-right"
                    onClick={ handleRightSwiper }
                >
                    <img src={rightArrowBlackIcon} alt="right arrow" />
                </div>
            }
        </div>
    );
}
 
export default EnlargedImage;