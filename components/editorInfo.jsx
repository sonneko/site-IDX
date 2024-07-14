import { getLocation } from "./const.js";
import { memberInfo }from "./const.js";

const location = getLocation();

const member = memberInfo();

if (location.type !== "index") console.error("description: not index page")


function EditorInfo(props) {
    const who = props.data.who;
    const name = member[who].name;
    const intro = member[who].intro;
    return (
        <div className="editorInfo">
            <h2>{"この記事の編集者 " + name + "紹介"}</h2>
            <p>{intro}</p>
            <div className="editorImage">
                <img src={"./defaultImage/memberIcon" + who + ".jpeg"} alt="アイコン" />
                <p>{name}</p>
            </div>
        </div>
    )
}

export default EditorInfo();