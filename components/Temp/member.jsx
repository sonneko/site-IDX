
//import Header Component and Footer Component
import { Header } from "";
import { Footer } from "";
import { getName } from "/const.js";

/*
    necessary data set;
    <MemberTemp data={
        memberId: "MEMBER ID",
        html: "CONTENT HTML DATA",
        visualImage: "VISUAL IMAGE PATH",
        index: [
            {direc: "LAYER NUMBER", visual: "DISPLAY HEADLINE STRING" path: "HEADLINE PATH"},
            {direc: "LAYER NUMBER", visual: "DISPLAY HEADLINE STRING" path: "HEADLINE PATH"},
        ]
    } />
*/


function createIndex(e) {
    const data = e.index
    let indexHtml = "<ul class=\"index\">";
    let direc;
    for (let i = 0; i <= data.length; i++) {
        switch (data[i].direc) {
            case 1:
                return "first";                
                break;
            case 2:
                return "second";
                break;
            case 3:
                return "third";
                break;
            default:
                return "ERROR";
                break;
        }.then(response => direc = response)
        indexHtml += "<list class=\"indexItem" + direc + "\">" + data[i].visual + "</list>";
    }
    indexHtml += "</ul>"
    return indexHtml.html;
}

function MemberTemp(props) {
    return (
        <>
            <body>
            <Header></Header>
            <main>
                <img src={props.data.visualImage} width="70%" height="50%" />
                <div class="titleBox">
                    <h1>{getName(props.data.memberId) + "についての紹介"}</h1>
                </div>
                <div class="index">
                    {createIndex(props)}
                </div>
                <div class="content">
                    {props.data.html}
                </div>
            </main>
            <Footer></Footer>
            </body>
        </>
    )
}


return default memberTemp;