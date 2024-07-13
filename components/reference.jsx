

function Reference(props) {
    const refer = props.reference;
    return (
        <div className="reference">
            <ul>
                {refer.map(item => <li><a href={item.link}>{item.str}</a></li>)}
            </ul>
        </div>
    )
}