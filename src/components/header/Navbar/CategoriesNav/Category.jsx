/* eslint-disable react/prop-types */
const Category = ({ category }) => {
    return (
        <div className="category">
            <a href={category.link}>{category.name}</a>
        </div>
    );
}

export default Category;