/* eslint-disable react/prop-types */
const Colors = ({colors, colorsPictures}) => {
    return (
        <div>
            <h4>Color: </h4>
            {
                colors.map((color, index) => (
                    <div key={index}>{color}</div>
                ))
            }
            {
                colorsPictures.map((colorPicture, index) => (
                    <img
                        key={index}
                        src={colorPicture}
                        alt={colorPicture}
                    />
                ))
            }
        </div>
    );
}
 
export default Colors;