/* eslint-disable react/prop-types */
const EnlargedImage = ({ enlargedImage }) => {
    return (
        <img
            className="enlarged-image"
            src={ enlargedImage }
            alt="enlarged product image"
        />
    );
}
 
export default EnlargedImage;