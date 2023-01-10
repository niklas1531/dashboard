const ContentSmIcon = (props) => {
    const { Icon } = props.icon
    return (
        <div className='content-sm'>
            <div className='header-sm' style={props.headercolor}>
                <img className='header-sm-icon' src={Icon} />

            </div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
        </div>
    );
}

export default ContentSmIcon;