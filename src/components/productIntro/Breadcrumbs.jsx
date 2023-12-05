import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import Breadcrumb from "./breadcrumbs/Breadcrumb";

const Breadcrumbs = () => {
    const product = useContext(ProductContext);
    const breadcrumbs = product.breadcrumbs;

    return (
        <div>
            <h6>Breadcrumbs Here</h6>
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <Breadcrumb
                        key={index}
                        breadcrumb={breadcrumb}
                    />
                ))
            }
        </div>
    );
}
 
export default Breadcrumbs;