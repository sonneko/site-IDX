//import Header Component and Footer Component
import { Header } from "";
import { Footer } from "";
import { getName } from "/const.js";

import Head from "./body/head.jsx"
import Footer from "./body/footer.jsx"
import Constant from "./body/constant.jsx"
import Header from "./body/header.jsx"


/*
    necessary data set;
        <MemberTemp data={{
            title: "TITLE STRING",
            html: "HTML DATA",
            visualImage: "VISUAL IMAGE PATH",
            index: [
                {direc: "LAYER NUMBER", visual: "DISPLAY HEADLINE STRING" path: "HEADLINE PATH"},
                {direc: "LAYER NUMBER", visual: "DISPLAY HEADLINE STRING" path: "HEADLINE PATH"},
            ]
        }} />
*/

function BlogTemp(props) {
    return (
        <>
            <html>
                <Head />
                <body>
                    <Constant />
                    <Header />
                    <main>
                        <h1>{props.data.title}</h1>
                        <img src={props.data.visualImage} width="80%" height="40%" />
                        
                        {props.data.html}
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    )
}
