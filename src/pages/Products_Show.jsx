/* eslint-disable react/prop-types */
import GoodsDetails from "../components/GoodsDetails";

const Products_Show = ({item}) => {
    return (
        <div>
            <h2>{item}</h2>
            <GoodsDetails />
        </div>
    );
}
 
export default Products_Show;