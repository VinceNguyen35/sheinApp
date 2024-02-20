/* eslint-disable react/prop-types */
// React Imports
import { useContext } from "react";
import { useParams } from "react-router-dom";

// Context Imports
import { ProductContext } from "../context/ProductContext";
import { MobileContext } from "../context/MobileContext";

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
import mochaBrown from "../assets/products/manfinity/mochaBrown.webp";
import darkGrey from "../assets/products/manfinity/darkGrey.webp";
import navyBlue from "../assets/products/manfinity/navyBlue.webp";
import manfinity_storeIMG from "../assets/products/manfinity/manfinity_storeIMG.jpg";


// Cargo Pants
import cargoPants_img1 from "../assets/products/cargoPants/cargoPants_img1.webp";
import cargoPants_img2 from "../assets/products/cargoPants/cargoPants_img2.webp";
import cargoPants_img3 from "../assets/products/cargoPants/cargoPants_img3.webp";
import cargoPants_img4 from "../assets/products/cargoPants/cargoPants_img4.webp";
import cargoPants_img5 from "../assets/products/cargoPants/cargoPants_img5.webp";
import cargoPants_img1_black from "../assets/products/cargoPants/cargoPants_img1_black.webp";
import cargoPants_storeIMG from "../assets/products/cargoPants/cargoPants_storeIMG.png";

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
import dress_storeIMG from "../assets/products/dress/dress_storeIMG.png";


// Component Imports
import ProductIntro from "../components/productIntro/ProductIntro";
import Breadcrumbs from "../components/productIntro/Breadcrumbs";
import NotFound from "../components/NotFound";

const Products_Show = () => {
    // Router Variables
    const { id } = useParams();
    let productExists = true;

    // Product Data Array
    const productData = [
        {
            productName: "Manfinity Homme Men Letter Patched Detail Tee",
            SKU: "sm2209144214692168",
            price: 11.99,
            discountPercentage: 41,
            discountPrice: 7.07,
            discountSavings: 4.92,
            averageRating: 4.79,
            numberOfReviews: 600,
            breadcrumbs: [
                {
                    title: "Home",
                    link: "https://us.shein.com/"
                },
                {
                    title: "Men Apparel",
                    link: "https://us.shein.com/Men-Apparel-c-2026.html"
                },
                {
                    title: "Men Clothing",
                    link: "https://us.shein.com/Men-Clothing-c-6273.html"
                },
                {
                    title: "Men Tops",
                    link: "https://us.shein.com/Men-Tops-c-1970.html"
                },
                {
                    title: "Men T-Shirts",
                    link: "https://us.shein.com/Men-T-Shirts-c-1980.html"
                }
            ],
            colors: [
                {
                    name: "Army Green",
                    picture: armyGreen
                },
                {
                    name: "Mocha Brown",
                    picture: mochaBrown
                },
                {
                    name: "Dark Grey",
                    picture: darkGrey
                },
                {
                    name: "Navy Blue",
                    picture: navyBlue
                }
            ],
            sizes: [
                "36 (S)",
                "38 (M)",
                "40 (L)",
                "42 (XL)",
                "44 (XXL)"
            ],
            description: [
                {
                    title: "Color",
                    detail: "Mocha Brown"
                },
                {
                    title: "Style",
                    detail: "Casual"
                },
                {
                    title: "Pattern Type",
                    detail: "Letter"
                },
                {
                    title: "Neckline",
                    detail: "Round Neck"
                },
                {
                    title: "Details",
                    detail: "Patched"
                },
                {
                    title: "Sleeve Length",
                    detail: "Long Sleeve"
                },
                {
                    title: "Sleeve Type",
                    detail: "Drop Shoulder"
                },
                {
                    title: "Length",
                    detail: "Long"
                },
                {
                    title: "Fit Type",
                    detail: "Regular Fit"
                },
                {
                    title: "Fabric",
                    detail: "Slight Stretch"
                },
                {
                    title: "Material",
                    detail: "Knitted Fabric"
                },
                {
                    title: "Composition",
                    detail: "75 % Polyester, 20% Viscose, 5% Elastane"
                },
                {
                    title: "Temperature",
                    detail: "Spring / Fall(18 - 25℃/63-77℉)"
                },
                {
                    title: "Care Instructions",
                    detail: "Machine wash or professional dry clean"
                },
                {
                    title: "Sheer",
                    detail: "No"
                }
            ],
            sizeAndFitHeaders: [
                "Size",
                "US",
                "Bicep Length",
                "Bust",
                "Cuff",
                "Length",
                "Shoulder",
                "Sleeve Length"
            ],
            sizeAndFitData: [
                [
                    "S",
                    "36",
                    16.9,
                    43.7,
                    9,
                    29.1,
                    23,
                    22.9
                ],
                [
                    "M",
                    "38",
                    17.3,
                    45.3,
                    9.4,
                    29.9,
                    23.8,
                    23.2
                ],
                [
                    "L",
                    "40",
                    17.9,
                    47.2,
                    9.9,
                    30.7,
                    24.8,
                    23.6
                ],
                [
                    "XL",
                    "42",
                    18.4,
                    49.2,
                    10.4,
                    31.5,
                    25.8,
                    23.9
                ],
                [
                    "XXL",
                    "44",
                    19,
                    51.2,
                    10.9,
                    32.3,
                    26.8,
                    24.2
                ],
            ],
            storeDetails: {
                storeName: "Manfinity Homme",
                storeTags:[],
                storeRating: "4.93",
                storeProducts: "12614",
                storeFollowers: "2.9K",
                storeImg: manfinity_storeIMG,
                storeLink: "https://us.shein.com/store/home?store_code=9518398926&type=selection&routeId=102216732&ici=PageGoodsDetail&src_identifier=on%3Dstore%60cn%3DManfinity%20Homme%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_9518398926&src_module=DetailBrand&src_tab_page_id=page_goods_detail1699586200179&store_score=4.93"
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
            discountPercentage: 37,
            discountPrice: 15.42,
            discountSavings: 9.07,
            averageRating: 3.62,
            numberOfReviews: 123,
            breadcrumbs: [
                {
                    title: "Home",
                    link: "https://us.shein.com/"
                },
                {
                    title: "Women Apparel",
                    link: "https://us.shein.com/Women-Apparel-c-4436.html"
                },
                {
                    title: "Women Clothing",
                    link: "https://us.shein.com/Women-Clothing-c-2030.html"
                },
                {
                    title: "Women Bottoms",
                    link: "https://us.shein.com/Women-Bottoms-c-1767.html"
                },
                {
                    title: "Women Pants",
                    link: "https://us.shein.com/Women-Pants-c-1740.html"
                },
            ],
            colors: [
                {
                    name: "Black",
                    picture: cargoPants_img1_black
                },
                {
                    name: "Grey",
                    picture: cargoPants_img1
                }
            ],
            sizes: [
                "2 (XS)",
                "4 (S)",
                "6 (M)",
                "8/10 (L)",
                "12 (XL)"
            ],
            description: [
                {
                    title: "Color",
                    detail: "Grey"
                },
                {
                    title: "Style",
                    detail: "Casual"
                },
                {
                    title: "Pattern Type",
                    detail: "Plain"
                },
                {
                    title: "Type",
                    detail: "Cargo Pants"
                },
                {
                    title: "Closure Type",
                    detail: "Zipper Fly"
                },
                {
                    title: "Details",
                    detail: "Button, Pocket, Zipper"
                },
                {
                    title: "Waist Line",
                    detail: "Natural"
                },
                {
                    title: "Length",
                    detail: "Long"
                },
                {
                    title: "Fit Type",
                    detail: "Regular Fit"
                },
                {
                    title: "Fabric",
                    detail: "Non - Stretch"
                },
                {
                    title: "Material",
                    detail: "Woven Fabric"
                },

                {
                    title: "Composition",
                    detail: "100 % Viscose"
                },
                {
                    title: "Care Instructions",
                    detail: "Hand wash, do not dry clean"
                },
                {
                    title: "Temperature",
                    detail: "Late Fall(10- 17℃/ 50 - 63℉)"
                },
                {
                    title: "Body",
                    detail: "Unlined"
                },
                {
                    title: "Sheer",
                    detail: "No"
                }
            ],
            sizeAndFitHeaders: [
                "Size",
                "US",
                "Hip Size",
                "Inseam",
                "Waist Size"
            ],
            sizeAndFitData: [
                [
                    "XS",
                    "2",
                    39,
                    30.3,
                    26.8
                ],
                [
                    "S",
                    "4",
                    103,
                    77.5,
                    72
                ],
                [
                    "M",
                    "6",
                    107,
                    78,
                    76
                ],
                [
                    "L",
                    "8/10",
                    111,
                    78.5,
                    82
                ],
                [
                    "XL",
                    "12",
                    115,
                    79,
                    88
                ],
            ],
            storeDetails: {
                storeName: "SDNGED General",
                storeTags: ["3P Seller"],
                storeRating: "4.00",
                storeProducts: "567",
                storeFollowers: "2.0K",
                storeImg: cargoPants_storeIMG,
                storeLink: "https://us.shein.com/store/home?store_code=5564930356&type=selection&routeId=102146317&ici=PageGoodsDetail&src_identifier=on%3Dstore%60cn%3DSDNGED%20General%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_5564930356&src_module=DetailBrand&src_tab_page_id=page_goods_detail1699586663486&store_score=4.0"
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
            discountPercentage: 30,
            discountPrice: 8.04,
            discountSavings: 3.45,
            averageRating: 4.62,
            numberOfReviews: 365,
            breadcrumbs: [
                {
                    title: "Home",
                    link: "https://us.shein.com/"
                },
                {
                    title: "Women Apparel",
                    link: "https://us.shein.com/Women-Apparel-c-4436.html"
                },
                {
                    title: "Weddings & Events",
                    link: "https://us.shein.com/Weddings-Events-c-3088.html"
                },
                {
                    title: "Women Party Wear",
                    link: "https://us.shein.com/Women-Party-Wear-c-5360.html"
                },
                {
                    title: "Women Cocktail Dresses",
                    link: "https://us.shein.com/Women-Cocktail-Dresses-c-8035.html"
                },
            ],
            colors: [
                {
                    name: "Violet Purple",
                    picture: violetPurple
                },
                {
                    name: "Dark Green",
                    picture: darkGreen
                },
                {
                    name: "Dusty Pink",
                    picture: dustyPink
                },
                {
                    name: "Dusty Blue",
                    picture: dustyBlue
                },
                {
                    name: "Baby Pink",
                    picture: babyPink
                },
                {
                    name: "Black",
                    picture: black
                },
                {
                    name: "Burgundy",
                    picture: burgundy
                }
            ],
            sizes: [
                "2 (XS)",
                "4 (S)",
                "6 (M)",
                "8/10 (L)",
            ],
            description: [
                {
                    title: "Color",
                    detail: "Dark Green"
                },
                {
                    title: "Pattern Type",
                    detail: "Plain"
                },
                {
                    title: "Details",
                    detail: "Backless, Draped, Wrap"
                },
                {
                    title: "Neckline",
                    detail: "Halter"
                },
                {
                    title: "Sleeve Length",
                    detail: "Sleeveless"
                },
                {
                    title: "Length",
                    detail: "Long"
                },
                {
                    title: "Fit Type",
                    detail: "Regular Fit"
                },
                {
                    title: "Fabric",
                    detail: "Non - Stretch"
                },
                {
                    title: "Material",
                    detail: "Satin"
                },
                {
                    title: "Composition",
                    detail: "97 % Polyester, 3% Elastane"
                },
                {
                    title: "Care Instructions",
                    detail: "Machine wash or professional dry clean"
                },
                {
                    title: "Sheer",
                    detail: "No"
                }
            ],
            sizeAndFitHeaders: [
                "Size",
                "US",
                "Bust",
                "Hip Size",
                "Length",
                "Waist Size"
            ],
            sizeAndFitData: [
                [
                    "XS",
                    "2",
                    32.7,
                    33.5,
                    52,
                    24
                ],
                [
                    "S",
                    "4",
                    34.3,
                    35,
                    52.8,
                    25.6
                ],
                [
                    "M",
                    "6",
                    35.8,
                    36.6,
                    53.5,
                    27.2
                ],
                [
                    "L",
                    "8/10",
                    38.2,
                    39,
                    54.3,
                    29.5
                ]
            ],
            storeDetails: {
                storeName: "SHEIN Belle",
                storeTags: [],
                storeRating: "4.85",
                storeProducts: "5801",
                storeFollowers: "2.7K",
                storeImg: dress_storeIMG,
                storeLink: "https://us.shein.com/store/home?store_code=2112285262&type=selection&routeId=102172132&ici=PageGoodsDetail&src_identifier=on%3Dstore%60cn%3DSHEIN%C2%A0Belle%60hz%3D0%60ps%3D1_1%60jc%3DthirdPartyStoreHome_2112285262&src_module=DetailBrand&src_tab_page_id=page_goods_detail1699586901956&store_score=4.85"
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

    // Product Array Routing Handling
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

    // Mobile Display Context
    const isMobile = useContext(MobileContext);

    return (
        <div className="found-product">
            {!productExists && <NotFound />}
            {productExists &&
                <div className="products-show">
                <ProductContext.Provider value={product}>
                    {
                        !isMobile &&
                        <Breadcrumbs />
                    }
                    <ProductIntro />
                </ProductContext.Provider>
            </div>}
        </div>
    );
}
 
export default Products_Show;