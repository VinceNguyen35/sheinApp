import fireIcon from "../../../../assets/logos/fireIcon.png";

const SearchContent = () => {
    const searchContentCategories = [
        {
            title: "Men Shirts Long Sleeve",
            isHot: true
        },
        {
            title: "Long Sleeve Men",
            isHot: true
        },
        {
            title: "Black Cargos",
            isHot: true
        },
        {
            title: "Dress Cocktail",
            isHot: true
        },
        {
            title: "Skirt",
            isHot: false
        },
        {
            title: "Shoes",
            isHot: false
        },
        {
            title: "Phone Case",
            isHot: false
        },
        {
            title: "Cardigan",
            isHot: false
        },
        {
            title: "Wedding Guest Dress",
            isHot: false
        },
        {
            title: "Jeans",
            isHot: false
        }
    ];

    return (
        <div className="search-content">
            <div className="search-content-title">
                Search Discovery
            </div>
            <div className="search-content-categories">
                {
                    searchContentCategories.map((category, index) => (
                        <div
                            key={index}
                            className="search-content-category"
                        >
                            {
                                category.isHot &&
                                <img src={fireIcon} alt="fire icon" />
                            }
                            {category.title}
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default SearchContent;