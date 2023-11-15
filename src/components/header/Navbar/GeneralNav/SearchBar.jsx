import searchIcon from "../../../../assets/logos/searchIcon.png";

const SearchBar = () => {
    return (
        <form action="">
            <input type="text" />
            <img
                src={searchIcon}
                alt="Search Icon"
            />
        </form>
    );
}
 
export default SearchBar;