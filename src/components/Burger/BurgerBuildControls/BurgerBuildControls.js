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
            <p className="burger__price">Price: {props.price}</p>
            {controls.map(cntl=>{
                return <BuildControl key={cntl.label} label={cntl.label} add={()=>props.addIngredient(cntl.type)} remove={()=> props.removeIngredient(cntl.type)}/>
            })}
            <button className="order__btn" disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
        
    )
}

export default BurgerBuildControls