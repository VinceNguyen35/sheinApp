/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
// react imports
import { useState, useEffect } from "react";

// component imports
import searchIcon from "../../../../assets/logos/searchIcon.png";
import SearchContent from "./SearchContent";

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
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        let i = 0;
        const rotatePlaceholderItem = () => {
            i++;
            setPlaceholderItem(placeholderItemsList[i]);
            if (i === 9) {
                i = -1;
            }
        }
        setInterval(rotatePlaceholderItem, 4000);
    }, []);

    const handleFocusIn = () => {
        setIsEditing(true)
    }

    const handleFocusOut = () => {
        setIsEditing(false);
    }

    return (
        <form action="">
            <input
                type="text"
                placeholder={placeholderItem}
                onFocus={handleFocusIn}
            />
            <img
                src={searchIcon}
                alt="Search Icon"
            />
            {
                isEditing &&
                <SearchContent />
            }
            {
                isEditing &&
                <div
                    className="search-mask-header"
                    onClick={handleFocusOut}
                ></div>
            }
            {
                isEditing &&
                <div
                    className="search-mask-body"
                    onClick={handleFocusOut}
                ></div>
            }
        </form>
    );
}

export default SearchBar;