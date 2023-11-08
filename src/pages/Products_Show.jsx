/* eslint-disable react/prop-types */
// React Imports
import { useParams } from "react-router-dom";

// Data Imports for Demo Purposes Only
import manfinity_img1 from "../assets/products/manfinity/manfinity_img1.webp";
import manfinity_img3 from "../assets/products/manfinity/manfinity_img3.webp";
import manfinity_img4 from "../assets/products/manfinity/manfinity_img4.webp";
import manfinity_img5 from "../assets/products/manfinity/manfinity_img5.webp";
import manfinity_img2 from "../assets/products/manfinity/manfinity_img2.webp";
import manfinity_img6 from "../assets/products/manfinity/manfinity_img6.webp";
import manfinity_img7 from "../assets/products/manfinity/manfinity_img7.webp";

// Component Imports
import GoodsDetails from "../components/GoodsDetails";
import NotFound from "../components/NotFound";

const Products_Show = () => {
    const { id } = useParams();
    let productExists = true;

    const productData = [
        {
            productName: "Manfinity Homme Men Letter Patched Detail Tee",
            SKU: "sm2209144214692168",
            price: 11.99,
            averageRating: 4.79,
            numberOfReviews: 600,
            colors: "Mocha Brown",
            sizes: [
                "s",
                "m",
                "l",
                "xl",
                "xxl"
            ],
            description: {
                "Color": "Mocha Brown",
                "Style": "Casual",
                "Pattern Type": "Letter",
                "Neckline": "Round Neck",
                "Details": "Patched",
                "Sleeve Length": "Long Sleeve",
                "Sleeve Type": "Drop Shoulder",
                "Length": "Long",
                "Fit Type": "Regular Fit",
                "Fabric": "Slight Stretch",
                "Material": "Knitted Fabric",
                "Composition": "75 % Polyester, 20% Viscose, 5% Elastane",
                "Temperature": "Spring / Fall(18 - 25℃/63-77℉)",
                "Care Instructions": "Machine wash or professional dry clean",
                "Sheer": "No",
            },
            pictures: [
                manfinity_img1,
                manfinity_img2,
                manfinity_img3,
                manfinity_img4,
                manfinity_img5,
                manfinity_img6,
                manfinity_img7
            ]
        },
        {
            productName: "Manfinity Homme Men Letter Patched Detail Tee",
            SKU: "sm2209144214692168",
            price: 11.99,
            averageRating: 4.79,
            numberOfReviews: 600,
            colors: "Mocha Brown",
            sizes: [
                "s",
                "m",
                "l",
                "xl",
                "xxl"
            ],
            description: {
                "Color": "Mocha Brown",
                "Style": "Casual",
                "Pattern Type": "Letter",
                "Neckline": "Round Neck",
                "Details": "Patched",
                "Sleeve Length": "Long Sleeve",
                "Sleeve Type": "Drop Shoulder",
                "Length": "Long",
                "Fit Type": "Regular Fit",
                "Fabric": "Slight Stretch",
                "Material": "Knitted Fabric",
                "Composition": "75 % Polyester, 20% Viscose, 5% Elastane",
                "Temperature": "Spring / Fall(18 - 25℃/63-77℉)",
                "Care Instructions": "Machine wash or professional dry clean",
                "Sheer": "No",
            },
            pictures: [
                manfinity_img1,
                manfinity_img2,
                manfinity_img3,
                manfinity_img4,
            ]
        },
        {
            productName: "Manfinity Homme Men Letter Patched Detail Tee",
            SKU: "sm2209144214692168",
            price: 11.99,
            averageRating: 4.79,
            numberOfReviews: 600,
            colors: "Mocha Brown",
            sizes: [
                "s",
                "m",
                "l",
                "xl",
                "xxl"
            ],
            description: {
                "Color": "Mocha Brown",
                "Style": "Casual",
                "Pattern Type": "Letter",
                "Neckline": "Round Neck",
                "Details": "Patched",
                "Sleeve Length": "Long Sleeve",
                "Sleeve Type": "Drop Shoulder",
                "Length": "Long",
                "Fit Type": "Regular Fit",
                "Fabric": "Slight Stretch",
                "Material": "Knitted Fabric",
                "Composition": "75 % Polyester, 20% Viscose, 5% Elastane",
                "Temperature": "Spring / Fall(18 - 25℃/63-77℉)",
                "Care Instructions": "Machine wash or professional dry clean",
                "Sheer": "No",
            },
            pictures: [
                manfinity_img6,
                manfinity_img7
            ]
        }
    ];

    let product = {};
    switch(id) {
        case "manfinity": 
            product = productData[0];
            productExists = true;
            break;
        case "cargopants": 
            product = productData[1];
            productExists = true;
            break;
        case "dress":
            product = productData[2];
            productExists = true;
            break;
        default:
            product = productData[0];
            productExists = false;
            break;
        
    }

    return (
        <div>
            {!productExists && <NotFound />}
            {productExists &&
            <div>
                <h2>{id}</h2>
                <GoodsDetails product={product} />
            </div>}
        </div>
    );
}
 
export default Products_Show;