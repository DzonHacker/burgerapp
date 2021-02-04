import '../../css/Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
const Burger = (props) => {

    let pIngredients = Object.keys(props.elements).map(igKey =>{
        return [...Array(props.elements[igKey])].map((_,i) => {
            return <BurgerIngredient key={igKey+i} type={igKey} />
        })
    }).reduce((arr, newEl)=>{
        return arr.concat(newEl)
    },[])
    if(pIngredients.length === 0){
        pIngredients = <p>Please Add ingredients</p>
    }

    return (
        
        <div className="burger">
            <BurgerIngredient type="bread-top"/>
            {pIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger