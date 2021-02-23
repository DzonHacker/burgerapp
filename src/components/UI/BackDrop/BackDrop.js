import './BackDrop.css'
const BackDrop = (props) => {
    return(
        props.show ? <div className="backdrop" onClick={props.clickedBackDrop}></div> : ''
    )
}

export default BackDrop