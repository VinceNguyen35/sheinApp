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
    const [totalOriginalPrice, setTotalOriginalPrice] = useState(0);
    const [totalDiscountPrice, setTotalDiscountPrice] = useState(0);
    const [totalSavings, setTotalSavings] = useState(0);

    // Context Variables
    const cartTotal = useContext(CartTotalContext);
    const cartItems = useContext(CartItemsContext);

    useEffect(() => {
        if(cartTotal.cartTotal > 0) {
            setIsCartEmpty(false);

            // Calculate Total Values
            setTotalOriginalPrice(cartItems.cartItems[0].product.price * cartTotal.cartTotal);
            setTotalDiscountPrice(cartItems.cartItems[0].product.discountPrice * cartTotal.cartTotal);
            setTotalSavings(cartItems.cartItems[0].product.discountSavings * cartTotal.cartTotal);
        } else {
            setIsCartEmpty(true);
            setTotalOriginalPrice(0);
            setTotalDiscountPrice(0);
            setTotalSavings(0);
        }
    },[cartItems.cartItems, cartTotal])

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
                    <div className="cart-items-list">
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
                                        <div className="cart-item-price">{cartItem.product.discountPrice}</div>
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
                    <div className="total-pricing">
                        <div className="price">Retail Price: ${ totalOriginalPrice.toFixed(2) }</div>
                        <div className="savings">Already Saved: ${ totalSavings.toFixed(2) }</div>
                        <div className="price">Total: <span className="discount-price">${totalDiscountPrice.toFixed(2)}</span></div>
                    </div>
                    <div className="checkout-button">CHECKOUT</div>
                </div>
            }
        </div>
    );
}

export default Dropdown;