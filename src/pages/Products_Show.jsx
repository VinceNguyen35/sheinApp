/* eslint-disable react/prop-types */
// React Imports
import { useParams } from "react-router-dom";

// Data Imports for Demo Purposes Only
// Manfinity
import manfinity_img1 from "../assets/products/manfinity/manfinity_img1.webp";
import manfinity_img3 from "../assets/products/manfinity/manfinity_img3.webp";
import manfinity_img4 from "../assets/products/manfinity/manfinity_img4.webp";
import manfinity_img5 from "../assets/products/manfinity/manfinity_img5.webp";
import manfinity_img2 from "../assets/products/manfinity/manfinity_img2.webp";
import manfinity_img6 from "../assets/products/manfinity/manfinity_img6.webp";
import manfinity_img7 from "../assets/products/manfinity/manfinity_img7.webp";
import armyGreen from "../assets/products/manfinity/armyGreen.webp";
import darkGrey from "../assets/products/manfinity/darkGrey.webp";
import mochaBrown from "../assets/products/manfinity/mochaBrown.webp";
import navyBlue from "../assets/products/manfinity/navyBlue.webp";


// Cargo Pants
import cargoPants_img1 from "../assets/products/cargoPants/cargoPants_img1.webp";
import cargoPants_img2 from "../assets/products/cargoPants/cargoPants_img2.webp";
import cargoPants_img3 from "../assets/products/cargoPants/cargoPants_img3.webp";
import cargoPants_img4 from "../assets/products/cargoPants/cargoPants_img4.webp";
import cargoPants_img5 from "../assets/products/cargoPants/cargoPants_img5.webp";
import cargoPants_img1_black from "../assets/products/cargoPants/cargoPants_img1_black.webp";


// Dress
import dress_img1 from "../assets/products/dress/dress_img1.webp";
import dress_img2 from "../assets/products/dress/dress_img2.webp";
import dress_img3 from "../assets/products/dress/dress_img3.webp";
import dress_img4 from "../assets/products/dress/dress_img4.webp";
import dress_img5 from "../assets/products/dress/dress_img5.webp";
import dress_img6 from "../assets/products/dress/dress_img6.webp";
import violetPurple from "../assets/products/dress/violetPurple.webp";
import darkGreen from "../assets/products/dress/darkGreen.webp";
import dustyPink from "../assets/products/dress/dustyPink.webp";
import dustyBlue from "../assets/products/dress/dustyBlue.webp";
import babyPink from "../assets/products/dress/babyPink.webp";
import black from "../assets/products/dress/black.webp";
import burgundy from "../assets/products/dress/burgundy.webp";


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
            colors: [
                "Army Green",
                "Dark Grey",
                "Mocha Brown",
                "Navy Blue"
            ],
            colorsPictures: [
                armyGreen,
                darkGrey,
                mochaBrown,
                navyBlue
            ],
            sizes: [
                "36 (S)",
                "38 (M)",
                "40 (L)",
                "42 (XL)",
                "44 (XXL"
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
            productName: "Flap Pocket Cargo Pants",
            SKU: "sw2303019187878545",
            price: 24.49,
            averageRating: 3.62,
            numberOfReviews: 123,
            colors: [
                "Black",
                "Grey"
            ],
            colorsPictures: [
                cargoPants_img1_black,
                cargoPants_img1
            ],
            sizes: [
                "2 (XS)",
                "4 (S)",
                "6 (M)",
                "8/10 (L)",
                "12 (XL)"
            ],
            description: {
                "Color": "Grey",
                "Style": "Casual",
                "Pattern Type": "Plain",
                "Type": "Cargo Pants",
                "Closure Type": "Zipper Fly",
                "Details": "Button, Pocket, Zipper",
                "Waist Line": "Natural",
                "Length": "Long",
                "Fit Type": "Regular Fit",
                "Fabric": "Non - Stretch",
                "Material": "Woven Fabric",
                "Composition": "100 % Viscose",
                "Care Instructions": "Hand wash, do not dry clean",
                "Temperature": "Late Fall(10- 17℃/ 50 - 63℉)",
                "Body": "Unlined",
                "Sheer": "No",
            },
            pictures: [
                cargoPants_img1,
                cargoPants_img2,
                cargoPants_img3,
                cargoPants_img4,
                cargoPants_img5
            ]
        },
        {
            productName: "SHEIN Belle Solid Draped Backless Halterneck Satin Bridesmaid Dress",
            SKU: "sn2204193020259050",
            price: 11.49,
            averageRating: 4.76,
            numberOfReviews: 365,
            colors: [
                "Violet Purple",
                "Dark Green",
                "Dusty Pink",
                "Dusty Blue",
                "Baby Pink",
                "Black",
                "Burgundy"
            ],
            colorsPictures: [
                violetPurple,
                darkGreen,
                dustyPink,
                dustyBlue,
                babyPink,
                black,
                burgundy
            ],
            sizes: [
                "2 (XS)",
                "4 (S)",
                "6 (M)",
                "8/10 (L)",
            ],
            description: {
                "Color": "Dark Green",
                "Pattern Type": "Plain",
                "Details": "Backless, Draped, Wrap",
                "Neckline": "Halter",
                "Sleeve Length": "Sleeveless",
                "Length": "Long",
                "Fit Type": "Regular Fit",
                "Fabric": "Non - Stretch",
                "Material": "Satin",
                "Composition": "97 % Polyester, 3% Elastane",
                "Care Instructions": "Machine wash or professional dry clean",
                "Sheer": "No",
            },
            pictures: [
                dress_img1,
                dress_img2,
                dress_img3,
                dress_img4,
                dress_img5,
                dress_img6
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