import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("category: not blog page")

function Category() {
    const category = location.category;
    return (
        <div className="category">
            <p>{category}</p>
        </div>
    )
}

export default Category;