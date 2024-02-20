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
                <div key={index} className="cart-item">
                    <div>{ cartItem.product.productName }</div>
                    <div>{ cartItem.color.color }</div>
                    <img src={ cartItem.color.picture } alt="picture of item color" />
                    <div>{ cartItem.size }</div>
                    <div>{ cartItem.product.price }</div>
                </div>
            ))}
        </div>
    );
}

export default Dropdown;