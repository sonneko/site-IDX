import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleDescription: not blog page")

function ArticleDescription(props) {
    const data = props.data;
    return (
    <div className="articleDescription">
        <p>
            {data.head.description}
        </p>
    </div>
    )
}

export default ArticleDescription;