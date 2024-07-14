

function Reference(props) {
    const refer = props.data.reference;
    return (
        <div className="reference">
            <ul>
                {refer.map(item => <li><a href={item.link}>{item.str}</a></li>)}
            </ul>
        </div>
    )
}

export default Reference;