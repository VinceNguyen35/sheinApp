// React Imports
import { useContext } from "react";

// Context Imports
import { ProductContext } from "../../context/ProductContext";

const Breadcrumbs = () => {
    const product = useContext(ProductContext);
    const productName = product.productName;
    const breadcrumbs = product.breadcrumbs;

    const handleFinalBreadcrumb = (index, endOfBreadcrumbs) => {
        if(index === endOfBreadcrumbs) {
            return true;
        }
        return false;
    }

    return (
        <div className="breadcrumbs">
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <div
                        className="breadcrumb"
                        key={index}
                    >
                        <a href={breadcrumb.link}>
                            {breadcrumb.title}
                        </a>
                        <span> / </span>
                        {
                            handleFinalBreadcrumb(index, breadcrumbs.length - 1) &&
                            <a href="#">
                                {productName}
                            </a>
                        }
                    </div>
                ))
            }
        </div>
    );
}
 
export default Breadcrumbs;