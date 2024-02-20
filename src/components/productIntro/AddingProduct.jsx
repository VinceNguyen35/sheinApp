/* eslint-disable react/prop-types */
// React Imports
import { useContext } from "react";

// Context Imports
import { ProductContext } from "../../context/ProductContext";
import { CartTotalContext } from "../../context/CartTotalContext";
import { CartItemsContext } from "../../context/CartItemsContext";

// Image Imports
import heartIconBlack from "../../assets/logos/heartIconBlack.png";

const AddingProduct = ({selectedColor, selectedSize}) => {

    // Context Variables
    const product = useContext(ProductContext);
    const cartTotal = useContext(CartTotalContext);
    const cartItems = useContext(CartItemsContext);

    const handleAdd = () => {
        // Handle Cart Total
        const currentCartTotal = cartTotal.cartTotal;
        cartTotal.setCartTotal(currentCartTotal + 1);

        // Handle Cart Items
        const currentCartItems = cartItems.cartItems;
        const newCartItem = {
            product: product,
            color: selectedColor,
            size: selectedSize
        };
        cartItems.setCartItems([...currentCartItems, newCartItem]);
    }

    return (
        <div className="adding-product">
            <div
                className="add-to-cart"
                onClick={handleAdd}
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