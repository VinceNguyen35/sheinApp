// React Imports
import { useState } from "react";

// Component Imports
import Categories from "./Categories";
import Category from "./Category";
import CategoriesScroller from "./CategoriesScroller";

const CategoriesNav = () => {
    const categories = [
        {
            name: "New In",
            link: "https://us.shein.com/RecommendSelection/new-in-all-sc-017155063.html?adp=&categoryJump=true&ici=us_tab01navbar01&src_identifier=fc%3DNew%20In%60sc%3DNEWIN%60tc%3D0%60oc%3D0%60ps%3Dtab01navbar01%60jc%3DitemPicking_017155063&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Sale",
            link: "https://us.shein.com/RecommendSelection/All-Sale-sc-017210185.html?adp=&categoryJump=true&ici=us_tab02navbar02&src_identifier=fc%3DSale%60sc%3DSALE%60tc%3D0%60oc%3D0%60ps%3Dtab02navbar02%60jc%3DitemPicking_017210185&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Women Clothing",
            link: "https://us.shein.com/Women-Clothing-c-2030.html?adp=&categoryJump=true&ici=us_tab03navbar03&src_identifier=fc%3DWomen%20Clothing%60sc%3DWomenClothing%60tc%3D0%60oc%3D0%60ps%3Dtab03navbar03%60jc%3Dreal_2030&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Curve",
            link: "https://us.shein.com/Women-Plus-Clothing-c-1888.html?adp=&categoryJump=true&ici=us_tab04navbar04&src_identifier=fc%3DCurve%60sc%3DCurveClothing%60tc%3D0%60oc%3D0%60ps%3Dtab04navbar04%60jc%3Dreal_1888&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Kids",
            link: "https://us.shein.com/Kids-c-2031.html?adp=&categoryJump=true&ici=us_tab05navbar05&src_identifier=fc%3DKids%60sc%3DKids%60tc%3D0%60oc%3D0%60ps%3Dtab05navbar05%60jc%3Dreal_2031&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Men Fashion",
            link: "https://us.shein.com/recommend/Men-sc-100215777.html?adp=&categoryJump=true&ici=us_tab06navbar06&src_identifier=fc%3DMen%20Fashion%60sc%3DMenFashion%60tc%3D0%60oc%3D0%60ps%3Dtab06navbar06%60jc%3DitemPicking_100215777&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Women Lingerie & Sleep",
            link: "https://us.shein.com/Women-Sleep-Lounge-c-3626.html?adp=&categoryJump=true&ici=us_tab07navbar07&src_identifier=fc%3DWomen%20Lingerie%20%26%20Sleep%60sc%3DUnderwearSleepwear%60tc%3D0%60oc%3D0%60ps%3Dtab07navbar07%60jc%3Dreal_3626&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Women Jewelry & Accessories",
            link: "https://us.shein.com/RecommendSelection/Jewelry-and-Accs-sc-017188037.html?adp=&categoryJump=true&ici=us_tab08navbar08&src_identifier=fc%3DWomen%20Jewelry%20%26%20Accessories%60sc%3DWomenJewelryAccs%60tc%3D0%60oc%3D0%60ps%3Dtab08navbar08%60jc%3DitemPicking_017188037&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Women Shoes",
            link: "https://us.shein.com/Women-Shoes-c-1745.html?adp=&categoryJump=true&ici=us_tab09navbar09&src_identifier=fc%3DWomen%20Shoes%60sc%3DWomenShoes%60tc%3D0%60oc%3D0%60ps%3Dtab09navbar09%60jc%3Dreal_1745&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Home & Kitchen",
            link: "https://us.shein.com/Home-Living-c-2032.html?adp=&categoryJump=true&ici=us_tab10navbar10&src_identifier=fc%3DHome%20%26%20Kitchen%60sc%3DHomeKitchen%60tc%3D0%60oc%3D0%60ps%3Dtab10navbar10%60jc%3Dreal_2032&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Sports & Outdoors",
            link: "https://us.shein.com/Sports-Outdoor-c-3195.html?adp=&categoryJump=true&ici=us_tab11navbar11&src_identifier=fc%3DSports%20%26%20Outdoors%60sc%3DSportsOutdoor%60tc%3D0%60oc%3D0%60ps%3Dtab11navbar11%60jc%3Dreal_3195&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Baby & Maternity",
            link: "https://us.shein.com/Baby-c-3224.html?adp=&categoryJump=true&ici=us_tab12navbar12&src_identifier=fc%3DBaby%20%26%20Maternity%60sc%3DBabyMaternity%60tc%3D0%60oc%3D0%60ps%3Dtab12navbar12%60jc%3Dreal_3224&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Beauty & Health",
            link: "https://us.shein.com/Beauty-Health-c-1864.html?adp=&categoryJump=true&ici=us_tab13navbar13&src_identifier=fc%3DBeauty%20%26%20Health%60sc%3DBEAUTYHEALTH%60tc%3D0%60oc%3D0%60ps%3Dtab13navbar13%60jc%3Dreal_1864&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Bags & Luggage",
            link: "https://us.shein.com/Bags-Luggage-c-3637.html?adp=&categoryJump=true&ici=us_tab14navbar14&src_identifier=fc%3DBags%20%26%20Luggage%60sc%3DBagsLuggage%60tc%3D0%60oc%3D0%60ps%3Dtab14navbar14%60jc%3Dreal_3637&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Electronics",
            link: "https://us.shein.com/Electronics-c-2273.html?adp=&categoryJump=true&ici=us_tab15navbar15&src_identifier=fc%3DElectronics%60sc%3DElectronics%60tc%3D0%60oc%3D0%60ps%3Dtab15navbar15%60jc%3Dreal_2273&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Tools & Home Improvement",
            link: "https://us.shein.com/Tools-Home-Improvement-c-4327.html?adp=&categoryJump=true&ici=us_tab16navbar16&src_identifier=fc%3DTools%20%26%20Home%20Improvement%60sc%3DToolsHomeImprovement%60tc%3D0%60oc%3D0%60ps%3Dtab16navbar16%60jc%3Dreal_4327&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Home Textile & Sewing",
            link: "https://us.shein.com/Home-Textile-c-4083.html?adp=&categoryJump=true&ici=us_tab17navbar17&src_identifier=fc%3DHome%20Textile%20%26%20Sewing%60sc%3DHomeTextileSewing%60tc%3D0%60oc%3D0%60ps%3Dtab17navbar17%60jc%3Dreal_4083&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Appliances",
            link: "https://us.shein.com/Home-Appliances-c-3650.html?adp=&categoryJump=true&ici=us_tab18navbar18&src_identifier=fc%3DAppliances%60sc%3DAppliances%60tc%3D0%60oc%3D0%60ps%3Dtab18navbar18%60jc%3Dreal_3650&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Automotive",
            link: "https://us.shein.com/Automotive-c-3657.html?adp=&categoryJump=true&ici=us_tab19navbar19&src_identifier=fc%3DAutomotive%60sc%3DAutomotive%60tc%3D0%60oc%3D0%60ps%3Dtab19navbar19%60jc%3Dreal_3657&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Pet Supplies",
            link: "https://us.shein.com/Pet-Supplies-c-2400.html?adp=&categoryJump=true&ici=us_tab20navbar20&src_identifier=fc%3DPet%20Supplies%60sc%3DPetSupplies%60tc%3D0%60oc%3D0%60ps%3Dtab20navbar20%60jc%3Dreal_2400&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Office & School Supplies",
            link: "https://us.shein.com/Office-School-Supplies-c-2297.html?adp=&categoryJump=true&ici=us_tab21navbar21&src_identifier=fc%3DOffice%20%26%20School%20Supplies%60sc%3DOfficeSchoolSupplies%60tc%3D0%60oc%3D0%60ps%3Dtab21navbar21%60jc%3Dreal_2297&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        },
        {
            name: "Toys & Games",
            link: "https://us.shein.com/Toys-Games-c-4328.html?adp=&categoryJump=true&ici=us_tab22navbar22&src_identifier=fc%3DToys%20%26%20Games%60sc%3DToys%60tc%3D0%60oc%3D0%60ps%3Dtab22navbar22%60jc%3Dreal_4328&src_module=topcat&src_tab_page_id=page_goods_detail1699309482800"
        }
    ];

    const carouselBreakpoints = [
        0,
        62.86,
        110.55,
        239.72,
        298.28,
        344.84,
        446.17,
        622.8,
        840.03,
        953.41,
        1077.04,
        1215.04,
        1345.65,
        1469.49,
        1595.52,
        1685.44,
        1886.28,
        2052.23,
        2144.82,
        2239.96,
        2338.52,
        2514.91,
    ];

    const [carouselDisplacement, setCarouselDisplacement] = useState(0);

    const scrollLeft = () => {
        setCarouselDisplacement(carouselDisplacement - 2);
    }

    const scrollRight = () => {
        setCarouselDisplacement(carouselDisplacement + 2);
    }


    return (
        <div className="categories-nav">
            <div className="categories-dropdown">
                <Categories />
            </div>
            <div className="categories-carousel-controller">
                <div
                    className="categories-carousel-content"
                    style={{
                        transition: "transform 0.5s ease 0s",
                        transform: "translate(-" + carouselBreakpoints[carouselDisplacement] + "px)"
                    }}
                >
                    {categories.map((category, index) => (
                        <Category
                            key={index}
                            category={category}
                        />
                    ))}
                </div>
            </div>
            <CategoriesScroller
                carouselDisplacement={carouselDisplacement}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
            />
        </div>
    );
}

export default CategoriesNav;