import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleDescription: not blog page")

function ArticleDescription(props) {
    return (
    <div className="articleDescription">
        <p>
            {props.head.description}
        </p>
    </div>
    )
}

export default ArticleDescription;