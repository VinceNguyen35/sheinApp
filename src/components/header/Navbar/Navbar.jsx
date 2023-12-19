import GeneralNav from "./generalNav/GeneralNav";
import CategoriesNav from "./categoriesNav/CategoriesNav";

const Navbar = () => {
    return (
        <div className="navbar">
            <GeneralNav />
            <CategoriesNav />
        </div>
    );
}
 
export default Navbar;