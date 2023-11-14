import searchIcon from "../../../../assets/logos/searchIcon.png";

const SearchBar = () => {
    return (
        <div>
            <form action="">
                <input type="text" />
                <img
                    src={searchIcon}
                    alt="Search Icon"
                />
            </form>
        </div>
    );
}
 
export default SearchBar;