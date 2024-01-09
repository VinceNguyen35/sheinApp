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

    // useEffect Hook
    useEffect(() => {
        const newEnlargedImagePosition = enlargedImage * -384;
        setTransitionTime(0);
        setEnlargedImagePosition(newEnlargedImagePosition);

        // set the enlarged image width based on screen size
        if (isMobile) {
            setEnlargedImageWidth(window.innerWidth);
        } else {
            setEnlargedImageWidth(384);
        }
    }, [enlargedImage, isMobile]);

    // Handlers for Arrow Click Events
    const handleLeftSwiper = () => {
        let newEnlargedImage = enlargedImage - 1;
        let newEnlargedImagePosition = enlargedImagePosition + 384;
        setTransitionTime(0.3);
        setEnlargedImage(newEnlargedImage);
        setEnlargedImagePosition(newEnlargedImagePosition);
        console.log(enlargedImage);
        if (enlargedImage === 1) { // edge case for beginning of swiper
            const resetSwiper = () => {
                setTransitionTime(0);
                setEnlargedImage(lastPictureIndex + 1);
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
        console.log(enlargedImage);
        if (enlargedImage === lastPictureIndex + 1) { // edge case for end of swiper
            const resetSwiper = () => {
                setTransitionTime(0);
                setEnlargedImage(1);
                newEnlargedImagePosition = lastPictureIndex * 384;
                setEnlargedImagePosition(newEnlargedImagePosition);
            }

            setTimeout(resetSwiper, 300);
        }
    }

    const handleMouseMove = (event) => {
        setTransitionTime(0);
        let currentPosition = event.touches[0].clientX;
        setEnlargedImagePosition(currentPosition);
        console.log(currentPosition);
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
                    onTouchMove={handleMouseMove}
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