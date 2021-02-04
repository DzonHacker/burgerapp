import '../../../css/BurgerBuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const BurgerBuildControls = (props) => {
    const controls = [
        {label:'Salad', type: 'salad'},
        {label:'Bacon', type: 'bacon'},
        {label:'Cheese', type: 'cheese'},
        {label:'Meat', type: 'meat'}
    ]
    return(
        <div className="burger__buildControls">
            {controls.map(cntl=>{
                return <BuildControl key={cntl.label} label={cntl.label} add={()=>props.addIngredient(cntl.type)}/>
            })}
        </div>
    )
}

export default BurgerBuildControls