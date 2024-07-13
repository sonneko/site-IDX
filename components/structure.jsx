import { getLocation } from "./const.js";
import { categoryInfo } from "./const.js";
import { memberInfo } from "./const.js"

const location = getLocation();

const place = location.s;



function Structure(props) {
    switch (place) {
        case "blogIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/blog/index">ブログ</a>           
                </>
            );
            break;
        case "blogCategoryIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/blog/index">ブログ</a>
                  --
                  <a href="/blog/{category}">{categoryInfo()[category]}</a>
                </>
            )
            break;
        case "blogArticle":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/blog/index">ブログ</a>
                  --
                  <a href="/blog/{category}">{categoryInfo()[category]}</a>
                  --
                  <a href="#">{props.head.title}</a>
                </>
            )
            break;
        case "triviaIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/trivia/index">毎日雑学</a>
                </>
            )
            break;
        case "triviaArticle":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/trivia/index">毎日雑学</a>
                  --
                  <a href="#">{props.head.title}</a>
                </>)
            break;
        case "memberIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/member/index">メンバー</a>
                </>
            )
            break;
        case "memberArticle":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/member/index">メンバー</a>
                  --
                  <a href="#">{memberInfo()[location.id]}</a>
                </>
            )
            break;
        case "contestIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/contest/index">コンテスト</a>
                </>
            )
            break;
        case "contestArticle":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/contest/index">コンテスト</a>
                  --
                  <a href="#">{props.head.title}</a>
                </>
            )
            break;
        case "groupIndex":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/group/index">班について</a>
                </>
            )
            break;
        case "groupArticle":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="/group/index">班について</a>
                  --
                  <a href="#">{props.head.title}</a>
                </>
            )
            break;
        case "intro":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="#">自己紹介</a>
                </>
            )
            break;
        case "comment":
            return (
                <>
                  <a href="/index">ホーム</a>
                  --
                  <a href="#">コメント</a>
                </>
            )
            break;
        case "index":
            return (
                <>
                  <a href="/index">ホーム</a>
                </>
            )
            break;
    }
}

export default Structure;