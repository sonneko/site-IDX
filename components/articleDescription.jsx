import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleDescription: not blog page")

function ArticleDescription(content) {
    return (
    <div className="articleDescription">
        <p>
            {content}
        </p>
    </div>
    )
}

export default ArticleDescription;