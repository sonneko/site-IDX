import structure from "/structure/blog.json";
import { getLocation } from "./const/js";

const location = getLocation();

const length = structure.length;

function Next() {
    if (location.id === 1) {
      return (
        <a href={"/blog/" + string(location.id + 1)}>{"次の記事:" + structure[location.id + 1].title}</a>
      )
    } else  if (location.id === length) {
      return (
          <a href={"/blog/" + string(location.id - 1)}>{"前の記事:" + structure[location.id - 1].title}</a>
      )
    } else {
      return (
        <>
        <a href={"/blog/" + string(location.id + 1)}>{"次の記事:" + structure[location.id + 1].title}</a>
        <a href={"/blog/" + string(location.id - 1)}>{"前の記事:" + structure[location.id - 1].title}</a>
        </>
      )
    }
}

export default Next;