/* eslint-disable react/prop-types */
const Breadcrumb = ({breadcrumb}) => {
    return (
        <div>
            <a href={breadcrumb.link}>
                { breadcrumb.title }
            </a>
        </div>
    );
}
 
export default Breadcrumb;