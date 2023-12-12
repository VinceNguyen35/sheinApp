import heartIconBlack from "../../assets/logos/heartIconBlack.png";

const AddingProduct = () => {
    return (
        <div className="adding-product">
            <div className="add-to-cart">
                ADD TO CART
            </div>
            <div className="favorite-button">
                <img
                    src={ heartIconBlack }
                    alt="User Icon"
                    className="favorite-icon"
                />
            </div>
        </div>
    );
}
 
export default AddingProduct;