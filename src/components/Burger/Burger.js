import '../../css/Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = () => {
    return (
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="meat"/>
            <BurgerIngredient type="salad"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger