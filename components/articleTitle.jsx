import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleTitle: not blog page")

function articleTitle(content) {
    return (
    <div className="articleTitle">
        <h1>
            {content}
        </h1>
    </div>
    )
}

export default articleTitle;