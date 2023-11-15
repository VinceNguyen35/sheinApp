import GeneralNav from "./Navbar/GeneralNav";
import CategoriesNav from "./Navbar/CategoriesNav";

const Navbar = () => {
    return (
        <div className="navbar">
            <GeneralNav />
            <CategoriesNav />
        </div>
    );
}
 
export default Navbar;