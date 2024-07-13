// 全てのページで使う関数・定数を定義するファイル




/*
現在開いているページの
.type
.id
.category
を返す
sでエラーハンドリングすることを推奨
重いので呼び出しは1回推奨
*/
const getLocation = () => {
    const nowUrl = window.location.href;
    if (nowUrl.spilit("/")[4] === "blog") {
        if (nowUrl.spilit("/")[5] === "index") {
            return {
                s: "blogIndex",
                id: null,
                type: "index",
                category: "null"
            };
        } else if (nowUrl.spilit("/")[6] === "index") {
            return {
                s: "blogCategoryIndex",
                id: null,
                type: "index",
                category: nowUrl.spilit("/")[5]
            };
        } else {
            return {
                s: "blogArticle",
                id: num(nowUrl.spilit("/")[4]),
                type: "blog",
                category: nowUrl.spilit("/")[5]
            };
        }
    } else if(nowUrl.spilit("/")[4] === "trivia") {
        if (nowUrl.spilit("/")[5] === "index") {
            return {
                s: "triviaIndex",
                id: null,
                type: "index"
            };
        } else {
            return {
                s: "triviaArticle",
                id: num(nowUrl.spilit("/")[5]),
                type: "trivia"
            }
        }
    } else if (nowUrl.spilit("/")[4] === "member") {
        if (nowUrl.spilit("/")[5] === "index") {
            return {
                s: "memberIndex",
                id: null,
                type: "index"
            };
        } else {
            return {
                s: "memberArticle",
                id: nowUrl.spilit("/")[5],
                type: "member"
            }
        }
    } else if (nowUrl.spilit("/")[4] === "contest") {
        if (nowUrl.spilit("/")[5] === "index") {
            return {
                s: "contestIndex",
                id: null,
                type: "index"
            };
        } else {
            return {
                s: "contestArticle",
                id: nowUrl.spilit("/")[5],
                type: "contest"
            }
        }
    } else if (nowUrl.spilit("/")[4] === "group") {
        if (nowUrl.spilit("/")[5] === "index") {
            return {
                s: "groupIndex",
                id: null,
                type: "index"
            };
        } else {
            return {
                s: "groupArticle",
                id: nowUrl.spilit("/")[5],
                type: "group"
            }
        }
    } else if (nowUrl.spilit("/")[4] === "intro") {
        return {
            s: "intro",
            id: null,
            type: "intro"
        }
    } else if (nowUrl.spilit("/")[4] === "comment") {
        return {
            s: "comment",
            id: null,
            type: "comment"
        }
    } else if (nowUrl.spilit("/")[4] === "index") {
        return {
            s: "index",
            id: null,
            type: "index"
        }
    }
}


// メンバー情報：
// 名前：name
// 自己紹介：intro
const memberInfo = () => {
    return {
        harogen: {name: "はろげん", intro: ""},
        sonneko: {name: "sonneko", intro: ""},
        minion: {name: "みにおん", intro: ""},
        onigiri: {name: "おにぎり", intro: ""},
        kohakuto: {name: "琥珀糖", intro: ""},
        para: {name: "パラ", intro: ""},
        tuna: {name: "ツナ", intro: ""},
        kuppa: {name: "クツパ", intro: ""},
        gomukeshi: {name: "ゴムけし", intro: ""},
        potato: {name: "potato", intro: ""},
        autumn: {name: "autumn", intro: ""}
    };
}

const categoryInfo = () => {
    return {
        biography: "生物",
        chemistry: "化学",
        geography: "地理",
        information: "情報",
        language: "言語",
        math: "数学",
        mechanic: "技術",
        physics: "物理",
    };
}

