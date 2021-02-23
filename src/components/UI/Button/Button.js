import { checkPropTypes } from "prop-types"
import BuildControl from "../../Burger/BurgerBuildControls/BuildControl/BuildControl"

import './Button.css'
const Button = (props) => {
    return (
        <button className={`button ${props.btnType}`} onClick={props.clicked}>{props.children}</button>
    )
}

export default Button