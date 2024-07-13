import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleTitle: not blog page")

function articleTitle(props) {
    return (
    <div className="articleTitle">
        <h1>
            {props.head.title}
        </h1>
    </div>
    )
}

export default articleTitle;