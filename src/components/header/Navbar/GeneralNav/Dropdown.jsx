// React Imports
import { useContext } from "react";

// Context Imports
import { CartItemsContext } from "../../../../context/CartItemsContext";

const Dropdown = () => {

    // Context Variables
    const cartItems = useContext(CartItemsContext);

    return (
        <div className="dropdown">
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
                        <div className="cart-item-name">{cartItem.product.productName}</div>
                        <div className="cart-item-details">
                            <div className="cart-item-details-left">
                                <img
                                    src={cartItem.color.picture}
                                    alt="picture of item color"
                                    className="cart-item-color-picture"
                                />
                                <div className="cart-item-color-size">{cartItem.color.name} / {cartItem.size}</div>
                            </div>
                            <div className="cart-item-details-right">

                            </div>
                        </div>
                        <div className="cart-item-price">{cartItem.product.price}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Dropdown;