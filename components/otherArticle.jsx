import { TRACE_OUTPUT_VERSION } from "next/dist/shared/lib/constants";
import blogData from "/structure/blog.json"

function getOtherArticle() {
    const leng = blogData.length;
    if (blogData.length <= 12) return blogData.map(item => item)
    let out = [];
    while (out.length <= 12) {
        const num = Math.floor(Math.random() * leng);
        if (out.indexOf(num) === -1) out.push(num);
    }
    return out;
}


function OtherArticle() {
    let list = [];
    getOtherArticle().forEach(item => {
        const path = "/blog/"
        list.push("<li><img src='" + blogData[item].thumbnail + "'><a href='" + path + "'>" + blogData[item].title + "</a></li>");
    });
    return (
        <div className="otherArticle">
            <ul>
                {list}
            </ul>
        </div>
    )
}


export default OtherArticle;