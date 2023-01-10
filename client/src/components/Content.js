const Content = (props) => {
    return (
        <div className="content">
            <div className="header" style={props.headercolor}>
                <h3>{props.title}</h3>
            </div>
            {props.content}
        </div>
    );
}

export default Content;