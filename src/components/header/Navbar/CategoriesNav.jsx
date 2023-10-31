import Categories from "./CategoriesNav/Categories";
import Category from "./CategoriesNav/Category";

const categories = [
    "New In",
    "Sale",
    "Women Clothing",
    "Curve",
    "Kids",
    "Men Fashion",
    "Women Lingerie & Sleep",
    "Women Jewelry & Accessories",
    "Women Shoes",
    "Home & Kitchen",
    "Sports & Outdoors",
    "Baby & Maternity",
    "Beauty & Health",
    "Bags & Luggage",
    "Electronics",
    "Tools & Home Improvement",
    "Home Textile & Sewing",
    "Appliances",
    "Automotive",
    "Pet Supplies",
    "Office & School Supplies",
    "Toys & Games"
];

const CategoriesNav = () => {
    return (
        <div>
            <Categories />
            {categories.map((category, index) => (
                <Category
                    key={index}
                    category={category}
                />
            ))}
        </div>
    );
}
 
export default CategoriesNav;