import { getLocation } from "./const.js";

const location = getLocation();

if (location.type !== "blog") console.error("articleTitle: not blog page")

function articleTitle(props) {
    const data = props.data;
    return (
    <div className="articleTitle">
        <h1>
            {data.head.title}
        </h1>
    </div>
    )
}

export default articleTitle;