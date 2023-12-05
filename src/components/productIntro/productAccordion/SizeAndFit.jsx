import { useContext } from "react";
import { ProductContext } from "../../../context/ProductContext";

const SizeAndFit = () => {
    const product = useContext(ProductContext);
    const sizeAndFitHeaders = product.sizeAndFitHeaders
    const sizeAndFitData = product.sizeAndFitData;

    return (
        <div>
            <h6>Size & Fit Here!</h6>
            <h6>Product Measurements</h6>
            <div><span> CM </span><span> IN </span></div>
            <table>
                <thead>
                    <tr>
                        {
                            sizeAndFitHeaders.map((header, index) => (
                                <th
                                    key={index}
                                >
                                    {header}
                                </th>
                            ))
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sizeAndFitData.map((row, index) => (
                            <tr
                                key={ index }
                            >
                                {
                                    row.map((data, index) => (
                                        <td
                                            key={ index }
                                        >
                                            { data }
                                        </td>
                                    ))
                                }
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
 
export default SizeAndFit;