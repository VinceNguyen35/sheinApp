import heartIconBlack from "../../../assets/logos/heartIconBlack.png";

const AddingProduct = () => {
    return (
        <div>
            <button>ADD TO CART</button>
            <img
                src={heartIconBlack}
                alt="User Icon"
                style={{ width: 40 }}
            />
        </div>
    );
}
 
export default AddingProduct;