


function Constant() {
    return (
        <>
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
        </>
    )
}


export default Constant;