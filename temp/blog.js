import { iconImage } from "./const/js";
import { getLocation } from "./const/js";

const location = getLocation();

function getType() {
    const location = window.location.href;
    const bool = location.spilit("/").length == 3 || location.spilit("/")[4] === "index";
    if (bool) {
        return "index";
    } else {
        return "article";
    }
}

function Next() {
    if (location.s === "blogArticle" || location.s === "triviaArticle") {
        if (location.id === 1) {
            const str = string(location.id + 1);
            let zero;
            for (let i = str.length; i <= 4; i++) {
                zero += "0";
            }
            const nextUrl = "/" + location.type + "/" + zero + str;
            return (
                <link rel="next" href={nextUrl} />
            )
        } else {
            const str = string(location.id + 1);
            let zero;
            for (let i = str.length; i <= 4; i++) {
                zero += "0";
            }
            const nextUrl = "/" + location.type + "/" + zero + str;
            return (
                <link rel="next" href={nextUrl} />
            )
        }
    }
}

function Prev() {
    return(
        <></>
    )
}

function Temp(props) {
    return (
        <>
          <html>
            <head>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1" />

                <title>{props.head.title}</title>
                <meta name="description" content={props.head.title} />

                <meta property="og:url" content={window.location.href}/>
                <meta property="og:title" content={props.head.title} />
                <meta property="og:type" content={getType()} />
                <meta property="og:description" content={props.head.description} />
                <meta property="og:image" content={props.head.image} />
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

                <Next />
                <Prev/>
            </head>
          </html>
        </>
    )
}



export default Temp;