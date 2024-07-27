
import structure from "/structure/blog.json";

const length = structure.length;

/*
    necessary data set;
        <MemberTemp data={{
            title: "",
            id: "NUMBER",
            html: "",
        }} />
*/

function getDate(id) {
    const dt_str = "2024-06-29";
    let dt = new Date(dt_str);
    dt.setDate(dt.getDate() + id);
    return dt;
}

function Trivia(props) {
    const id = props.data.id
    return (
        <h1>{"毎日雑学no." + id + "  「" + props.data.title + "」"}</h1>
        {getDate(id) + "にX（旧Twitter）に投稿した内容です。"}
        <p>{props.data.html}</p>
    )
}


export default Trivia;