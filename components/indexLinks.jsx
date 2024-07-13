
/* 
dataのJSON構造
{
    head: {
        title: "",
        description: "",
        image: "",
        num: undefined,
        category: ""
    }
    reference: [
        {link: "", str: ""}
        {link: "", str: ""}
        {link: "", str: ""}
    ],
    html: ""
}

example:
{
    head: {
        title: "htmlの基本構文",
        description: "htmlの基本構文について解説しています。タグと属性について簡単にまとめました。....(120文字)",
        image: "./defaultImage/*****-/.svg",    //サムネイル画像のパス・サイトの最初や、OGP、他の記事のところに表示される画像のパス（画質は調節するシステムがついてます）
        num: 1,                                 // /blog/math/00001.htmlならば、1
        category: ""                            // /blog/math/00001.htmlならば、math
    },
    reference: [
        {link: "", str: ""},                    // 参考文献のリンクとそれについての説明
        {link: "", str: ""},
        {link: "", str: ""}
    ],
    html: ""                                    // 記事の内容(html)
}
*/


function IndexLinks(e) {
    const html = e.html;

}