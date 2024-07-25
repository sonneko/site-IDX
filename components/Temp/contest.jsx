
/*
    necessary data set;
        <MemberTemp data={{
            title: "",
            html: "",
        }} />
*/


function Contest(props) {
    return (
        <>
            <div class="title">
                <h1>{props.data.title + "の紹介"}</h1>
                <p>{props.data.title + "について紹介していきます。"}</p>
                <hr />
            </div>
            
            <div class="content">
                <p>{props.data.html}</p>
            </div>
        </>
    )
}

export default Contest