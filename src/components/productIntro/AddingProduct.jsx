// React Imports
import { useContext } from "react";

// Context Imports
import { CartContext } from "../../context/CartContext";

// Image Imports
import heartIconBlack from "../../assets/logos/heartIconBlack.png";

const AddingProduct = () => {
    const cartTotal = useContext(CartContext);

    const handleClick = () => {
        const currentCartTotal = cartTotal.cartTotal;
        cartTotal.setCartTotal(currentCartTotal + 1);
    }

    return (
        <div className="adding-product">
            <div
                className="add-to-cart"
                onClick={handleClick}
            >
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