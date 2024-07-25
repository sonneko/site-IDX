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
            title: "",
            html: "",
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
                        {props.data.html}
                    </main>
                    <Footer />
                </body>
            </html>
        </>
    )
}
