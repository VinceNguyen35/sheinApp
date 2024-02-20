/* eslint-disable react/prop-types */
// React Imports
import { useContext } from "react";

// Context Imports
import { CartTotalContext } from "../../../../context/CartTotalContext";
import { CartItemsContext } from "../../../../context/CartItemsContext";

// Image Imports
import trashIcon from "../../../../assets/logos/trashIcon.png";

const Dropdown = ({setShowCart}) => {

    // Context Variables
    const cartTotal = useContext(CartTotalContext);
    const cartItems = useContext(CartItemsContext);

    // Handler Functions
    const handleDelete = (index) => {
        // Handle Cart Total
        const newCartTotal = cartTotal.cartTotal - 1;
        cartTotal.setCartTotal(newCartTotal);

        // Handle Cart List
        const newCartItems = cartItems.cartItems;
        newCartItems.splice(index, 1);
        cartItems.setCartItems(newCartItems);
    }

    return (
        <div className="dropdown" onMouseLeave={() => setShowCart(false)}>
            {cartItems.cartItems.map((cartItem, index) => (
                <div key={index} className="cart-item row">
                    <div className="col-3-xs">
                        <img
                            src={cartItem.product.pictures[0]}
                            alt="picture of item color"
                            className="cart-item-picture"
                        />
                    </div>
                    <div className="col-9-xs">
                        <div className="cart-item-top">{cartItem.product.productName}</div>
                        <div className="cart-item-middle">
                            <div className="cart-item-middle-left">
                                <img src={cartItem.color.picture} alt="picture of item color" />
                                <div className="cart-item-color-size">{cartItem.color.name} / {cartItem.size}</div>
                            </div>
                            <div className="cart-item-middle-right">

                            </div>
                        </div>
                        <div className="cart-item-bottom">
                            <div className="cart-item-price">{cartItem.product.price}</div>
                            <img
                                src={trashIcon}
                                alt="trash icon"
                                onClick={() => handleDelete(index)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dropdown;