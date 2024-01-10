/* eslint-disable react/prop-types */

// React Imports
import { useState, useEffect, useContext } from "react";

// Context Imports
import { ProductContext } from "../../../context/ProductContext";
import { MobileContext } from "../../../context/MobileContext";

// Img Imports
import leftArrowBlackIcon from "../../../assets/logos/leftArrowBlackIcon.png";
import rightArrowBlackIcon from "../../../assets/logos/rightArrowBlackIcon.png";

const EnlargedImage = ({ enlargedImage, setEnlargedImage }) => {
    // Product Context
    const product = useContext(ProductContext);
    const pictures = product.pictures;
    const lastPictureIndex = pictures.length - 1;

    // Mobile Context
    const isMobile = useContext(MobileContext);

    // State Variables
    const [displaySwiper, setDisplaySwiper] = useState(false);
    const [enlargedImagePosition, setEnlargedImagePosition] = useState(0);
    const [transitionTime, setTransitionTime] = useState(0);
    const [enlargedImageWidth, setEnlargedImageWidth] = useState(0);
    const [lastCursorPosition, setLastCursorPosition] = useState(0);
    const [lastImagePosition, setLastImagePosition] = useState(0);

    // useEffect Hook
    useEffect(() => {
        let newEnlargedImagePosition = 0;

        // configure based on screen size
        if (isMobile) {
            setTransitionTime(0.3);
            setEnlargedImageWidth(window.innerWidth);
            newEnlargedImagePosition = enlargedImage * -258;
        } else {
            setTransitionTime(0);
            setEnlargedImageWidth(384);
            newEnlargedImagePosition = (enlargedImage + 1) * -384;
        }

        setEnlargedImagePosition(newEnlargedImagePosition);
    }, [enlargedImage, isMobile]);

    // Handlers for Arrow Click Events
    const handleLeftSwiper = () => {
        let newEnlargedImage = enlargedImage - 1;
        let newEnlargedImagePosition = enlargedImagePosition + 384;
        setTransitionTime(0.3);
        setEnlargedImage(newEnlargedImage);
        setEnlargedImagePosition(newEnlargedImagePosition);
        if (enlargedImage === 0) { // edge case for beginning of swiper
            const resetSwiper = () => {
                setTransitionTime(0);
                setEnlargedImage(lastPictureIndex);
                newEnlargedImagePosition = lastPictureIndex * 384;
                setEnlargedImagePosition(newEnlargedImagePosition);
            }

            setTimeout(resetSwiper, 300);
        }
    }

    const handleRightSwiper = () => {
        let newEnlargedImage = enlargedImage + 1;
        let newEnlargedImagePosition = enlargedImagePosition - 384;
        setTransitionTime(0.3);
        setEnlargedImage(newEnlargedImage);
        setEnlargedImagePosition(newEnlargedImagePosition);
        if (enlargedImage === lastPictureIndex) { // edge case for end of swiper
            const resetSwiper = () => {
                setTransitionTime(0);
                setEnlargedImage(0);
                newEnlargedImagePosition = lastPictureIndex * 384;
                setEnlargedImagePosition(newEnlargedImagePosition);
            }

            setTimeout(resetSwiper, 300);
        }
    }

    const handleTouchStart = (event) => {
        let touchPosition = event.touches[0].clientX;
        setTransitionTime(0);
        setLastCursorPosition(touchPosition - enlargedImagePosition);
        setLastImagePosition(enlargedImagePosition);
    }

    const handleTouchMove = (event) => {
        let touchPosition = event.touches[0].clientX;
        let newPosition = touchPosition - lastCursorPosition;
        setEnlargedImagePosition(newPosition);
    }

    const handleTouchEnd = () => {
        setTransitionTime(0.3);

        // Swiper Optimization

        const swiperEnd = (pictures.length * -255) + ((pictures.length - 1) * -3);
        const swiperEndPosition = swiperEnd + enlargedImageWidth;
        const differenceInPosition = enlargedImagePosition - lastImagePosition;
        const newEnlargedImage = Math.abs(parseInt(enlargedImagePosition / 258));
        const closestImagePercentage = Math.abs(enlargedImagePosition / 258) % 1;

        // Edge Cases (beginning and end of carousel)
        if (enlargedImagePosition < swiperEndPosition) { // end
            setEnlargedImagePosition(swiperEndPosition);
        } else if (enlargedImagePosition > 0) { // beginning
            setEnlargedImagePosition(0);
        // Keep Same Image if Little Movement
        } else if (Math.abs(differenceInPosition) < 20) {
            setEnlargedImagePosition(lastImagePosition);
        // Auto Change to Closest Photo
        } else if (closestImagePercentage > 0.4) {
            setEnlargedImage(newEnlargedImage + 1);
            setEnlargedImagePosition((enlargedImage) * -258);
            console.log(Math.abs(enlargedImagePosition / 258));
        } else  {
            setEnlargedImage(newEnlargedImage);
            setEnlargedImagePosition((enlargedImage) * -258);
            console.log(Math.abs(enlargedImagePosition / 258));
        }

        setLastCursorPosition(enlargedImagePosition);
    }

    return (
        <div
            className="enlarged-image-section"
            onMouseEnter={() => setDisplaySwiper(true)}
            onMouseLeave={() => setDisplaySwiper(false)}
        >
            <div
                className="enlarged-image-swiper"
                style={{ "width": enlargedImageWidth }}
            >
                <div
                    className="enlarged-image-content"
                    style={{
                        "transition": "transform " + transitionTime + "s",
                        "transform": "translate(" + enlargedImagePosition + "px)"
                    }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {
                        !isMobile &&
                        <img // for swiper carousel edge case
                            className="enlarged-image"
                            src={pictures[lastPictureIndex]}
                            alt={"gallery img " + `${lastPictureIndex}`}
                        />
                    }
                    {pictures.map((img, index) => (
                        <img
                            key={index}
                            className="enlarged-image"
                            src={img}
                            alt={"gallery img " + `${index}`}
                        />
                    ))}
                    {
                        !isMobile &&
                        <img // for swiper carousel edge case
                            className="enlarged-image"
                            src={pictures[0]}
                            alt={"gallery img 0"}
                        />
                    }
                </div>
                {
                    displaySwiper &&
                    <div
                        className="swiper-icon-left"
                        onClick={handleLeftSwiper}
                    >
                        {
                            !isMobile &&
                            <img src={leftArrowBlackIcon} alt="left arrow" />
                        }
                    </div>
                }
                {
                    displaySwiper &&
                    <div
                        className="swiper-icon-right"
                        onClick={handleRightSwiper}
                    >
                        {
                            !isMobile &&
                            <img src={rightArrowBlackIcon} alt="right arrow" />
                        }
                    </div>
                }
            </div>
        </div>
    );
}
 
export default EnlargedImage;