import Aux from '../../hoc/Auxx'
import Button from '../UI/Button/Button'
const OrderSummary = (props) => {
    console.log(props.ingredients)
    const ingredientSummary = Object.keys(props.ingredients).map((key,i) => {
        return <li key={key+i}><span style={{textTransform:'capitalize'}}>{key}</span>:{props.ingredients[key]}</li>
    })

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {props.price}</strong></p>
            <p>Continue to CheckOut</p>
            <Button btnType="danger" clicked={props.purchaseCancle}>Cancle</Button>
            <Button btnType="success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    )
}

export default OrderSummary