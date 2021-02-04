import PropTypes from 'prop-types'
import '../../../css/BurgerIngredient.css'
const BurgerIngredient = (props) => {
    let ingredient = null
    switch (props.type) {
        case ('bread-bottom'):
            ingredient = <div className="bi__bread-bottom"></div>;
            break
        case ('bread-top'):
            ingredient = (
                    <div className="bi__bread-top">
                        <div className="bi__seed1"></div>
                        <div className="bi__seed2"></div>
                    </div>
                )
            break
        case ('meat'):
            ingredient = <div className="bi__meat"></div>
            break
        case ('cheese'):
            ingredient = <div className="bi__cheese"></div>
            break
        case ('salad'):
            ingredient = <div className="bi__salad"></div>
            break
        case ('bacon'):
            ingredient = <div className="bi__bacon"></div>
            break
        default: 
            ingredient = null
    }
    return ingredient
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
} 


export default BurgerIngredient