/* eslint-disable react-hooks/exhaustive-deps */
// react imports
import { useState, useEffect } from "react";

// component imports
import searchIcon from "../../../../assets/logos/searchIcon.png";

const SearchBar = () => {
    const placeholderItemsList = [
        "Dress Cocktail",
        "Cargos",
        "Cargo Pants",
        "Men Navy Blue",
        "Oversized Tshirt",
        "Brides Maid Dress",
        "Jeans",
        "Cardigan",
        "Long Sleeve Men",
        "Wedding Guest Dress"
    ];

    const [placeholderItem, setPlaceholderItem] = useState(placeholderItemsList[0]);

    useEffect(() => {
        let i = 0;
        const rotatePlaceholderItem = () => {
            i++;
            setPlaceholderItem(placeholderItemsList[i]);
            if(i === 9) {
                i = -1;
            }
        }
        setInterval(rotatePlaceholderItem, 4000);
    }, []);

    return (
        <form action="">
            <input
                type="text"
                placeholder={ placeholderItem }
            />
            <img
                src={ searchIcon }
                alt="Search Icon"
            />
        </form>
    );
}
 
export default SearchBar;