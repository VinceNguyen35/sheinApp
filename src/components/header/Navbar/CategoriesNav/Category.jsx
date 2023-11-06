/* eslint-disable react/prop-types */
const Category = ({category}) => {
    return (
        <div>
            <a href={category.link}>{category.name}</a>
        </div>
    );
}
 
export default Category;