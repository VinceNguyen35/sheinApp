// React Imports
import { useContext } from "react";

// Context Imports
import { CartTotalContext } from "../../context/CartTotalContext";

// Image Imports
import heartIconBlack from "../../assets/logos/heartIconBlack.png";

const AddingProduct = () => {
    const cart = useContext(CartTotalContext);

    const handleClick = () => {
        const currentCartTotal = cart.cartTotal;
        cart.setCartTotal(currentCartTotal + 1);
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