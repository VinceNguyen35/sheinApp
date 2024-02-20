/* eslint-disable react/prop-types */
// React Imports
import { useState, useEffect, useContext } from "react";

// Context Imports
import { CartTotalContext } from "../../../../context/CartTotalContext";
import { CartItemsContext } from "../../../../context/CartItemsContext";

// Image Imports
import trashIcon from "../../../../assets/logos/trashIcon.png";
import shoppingCartIcon from "../../../../assets/logos/shoppingCartIcon.png";

const Dropdown = ({setShowCart}) => {

    // State Variables
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    // Context Variables
    const cartTotal = useContext(CartTotalContext);
    const cartItems = useContext(CartItemsContext);

    useEffect(() => {
        if(cartTotal.cartTotal > 0) {
            setIsCartEmpty(false);
        } else {
            setIsCartEmpty(true);
        }
    },[cartTotal])

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
            {
                isCartEmpty &&
                <div className="empty-cart">
                    <img src={shoppingCartIcon} alt="shopping cart" />
                    <div className="empty-cart-text">Shopping Cart is Empty</div>
                </div>
            }
            {
                !isCartEmpty &&
                <div className="not-empty-cart">
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
            }
        </div>
    );
}

export default Dropdown;