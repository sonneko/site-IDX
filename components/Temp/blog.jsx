import { iconImage } from "./const/js";
import { getLocation } from "./const/js";
import ArticleDescription from "../articleDescription";

//components
import Category from "../category";
import Next from "../next";
import Previous from "../previous";
import Tag from "../tag";
import RenewalDate from "../renewalDate";
import Title from "../title";
import Reference from "../reference";
import OtherArticle from "../otherArticle";
import EditorInfo from "../editorInfo";
import SocialMedia from "../socialMedia";
import Copylight from "../copylight";
import Search from "../search";
import HomeLink from "../homeLink";
import IndexLinks from "../indexLinks";
import ArticleTitle from "../articleTitle";
import MovingButton from "../movingButton";
import Hamburger from "../hamburger";
import XLinks from "../xLinks";
import Description from "../description";

const location = getLocation();

function getNextPrev() {
    const nextUrl = "/blog/" + string(location.id + 1);
    const prevUrl = "/blog/" + string(location.id - 1);
    return {
        nextUrl: nextUrl,
        prevUrl: prevUrl
    };
}

function getType() {
    const location = window.location.href;
    const bool = location.spilit("/").length == 3 || location.spilit("/")[4] === "index";
    if (bool) {
        return "index";
    } else {
        return "article";
    }
}



function Temp(props) {
    return (
        <>
          <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <title>{props.data.head.title}</title>
                <meta name="description" content={props.data.head.title} />

                <meta property="og:url" content={window.location.href}/>
                <meta property="og:title" content={props.data.head.title} />
                <meta property="og:type" content={getType()} />
                <meta property="og:description" content={props.data.head.description} />
                <meta property="og:image" content={props.data.head.image} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="Team_Aoristos" />
                <meta poperty="og:site_name" content="Team Aoristos公式サイト" />
                <meta property="og:local" content="ja_JP" />

                <link rel="icon" sizes="16x16" href={iconImage().s16} />
                <link rel="icon" sizes="32x32" href={iconImage().s32} />
                <link rel="icon" sizes="48x48" href={iconImage().s48} />
                <link rel="icon" sizes="62x62" href={iconImage().s62} />
                <link rel="apple-touch-icon-precomposed" href={iconImage().s150} />
                <link rel="msapplication-TileImage" content={iconImage().s150} />
                <link rel="msapplication-TileColor" content="#FFFDFA" />

                <link rel="next" href={getNextPrev().nextUrl} />
                <link rel="prev" href={getNextPrev().prevUrl} />
                
                <link rel="stylesheet" href="/css/style.css" />
            </head>

            <body>
               <div className="headerCommon">
               <Title data={props.data} />
               <Next data={props.data} />
               <Previous data={props.data} />
               <Tag data={props.data} />
               <RenewalDate data={props.data} />
               <ArticleDescription data={props.data} />
               <ArticleTitle data={props.data} />
               </div>

               <div className="main">
               <IndexLinks data={props.data} />
               {props.data.html}
               <Reference data={props.data} />
               </div>

               <div className="footer">
               <Previous data={props.data} />
               <Next data={props.data} />
               <OtherArticle data={props.data} />
               <EditorInfo data={props.data} />
               <SocialMedia data={props.data} />
               <HomeLink data={props.data} />
               <Category data={props.data} />
               <Search data={props.data} />
               <Title data={props.data} />
               <Description data={props.data} />
               <Copylight data={props.data} />
               </div>

               <div className="constant">
               <Hamburger data={props.data} />
               <Search data={props.data} />
               <XLinks data={props.data} />
               <Title data={props.data} />
               <SocialMedia data={props.data} />
               <MovingButton data={props.data} />
               <OtherArticle data={props.data} />
               <Search data={props.data} />
               </div>
            </body>
          </html>
        </>
    )
}



export default Temp;