import BuildControls from "../BurgerBuildControls"
import '../../../../css/BuildControl.css'
const BuildControl = (props) => {
    return (
        <div className="buildControl">
            <div className="bc__label">{props.label}</div>
            <button className="bc__less" onClick={props.remove}>Less</button>
            <button className="bc__more" onClick={props.add}>More</button>
        </div>
    )
}

export default BuildControl