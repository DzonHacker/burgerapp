import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import {useEffect, useState} from 'react'
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

const BurgerBuilder = () => {
    const [state, setState] = useState({ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
        },
        totalPrice: 2
    })
    const addIngredientHandler = (type) => {
        const oldCount = state.ingredients[type]
        const newCount = oldCount + 1
        const updateIngredients = {...state.ingredients}
        updateIngredients[type] = newCount
        //update price
        const oldPrice = state.totalPrice
        const ingredientPrice = INGREDIENT_PRICES[type]
        const newPrice = oldPrice + ingredientPrice
        //updateState
        console.log(updateIngredients)
        setState({ingredients:updateIngredients, totalPrice: newPrice})


    }

    const removeIngredientHandler = (type) => {

    }

    return (
        <Aux>
            <Burger elements={state.ingredients}/>
            <BurgerBuildControls 
                addIngredient={addIngredientHandler} />
        </Aux>
    )
}

export default BurgerBuilder