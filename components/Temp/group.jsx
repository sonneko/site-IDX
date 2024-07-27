
/*
    necessary data set;
    <MemberTemp data={
        title: "MEMBER ID",
        html: "CONTENT HTML DATA",
        visualImage: "VISUAL IMAGE PATH",
    } />
*/



function Group(props) {
    
    return (
        <main>
            <h1>{props.data.title}</h1>
        </main>
    )
}