import Aux from '../../hoc/Auxx'
import Burger from '../../components/Burger/Burger'
import {useEffect, useState} from 'react'
import BurgerBuildControls from '../../components/Burger/BurgerBuildControls/BurgerBuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'

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
        totalPrice: 2,
        purchasable: false
    })
    const [purchasing, setPurchasing] = useState(false)
    const updatePurchaseState = (upIng, upPrice) => {
        const ing = {...upIng}
        const price = upPrice
        const sum = Object.keys(ing).map(key=>{
            return ing[key]
        }).reduce((sum,el)=>{
            return sum+el
        },0)
        setState({ingredients:ing, totalPrice: price,purchasable: sum > 0})
        //setState({purchasable: sum > 0})
    }
    const addIngredientHandler = (type) => {
        const oldCount = state.ingredients[type]
        const newCount = oldCount + 1
        const updateIngredients = {...state.ingredients}
        updateIngredients[type] = newCount
        //update price
        const oldPrice = state.totalPrice
        const ingredientPrice = INGREDIENT_PRICES[type]
        const newPrice = (Number(oldPrice) + Number(ingredientPrice)).toFixed(2)
        

        //updateState
        setState({ingredients:updateIngredients, totalPrice: newPrice})
        updatePurchaseState(updateIngredients, newPrice);


    }

    const removeIngredientHandler = (type) => {
        const oldCount = state.ingredients[type]
        if(oldCount <= 0){
            return 
        }
        const newCount = oldCount - 1
        const updateIngredients = {...state.ingredients}
        updateIngredients[type] = newCount
        //update price
        const oldPrice = state.totalPrice
        const ingPrice = INGREDIENT_PRICES[type]
        const newPrice = (oldPrice - ingPrice).toFixed(2)
        //update state
        setState({ingredients:updateIngredients,totalPrice: newPrice})
        updatePurchaseState(updateIngredients, newPrice);
    }

    const PurchaseHandler = () => {
        setPurchasing(true)
    }

    const purchaseCancleHandler = () => {
        setPurchasing(false)
    }
    const purchaseContinueHandler = () => {
        alert('purchase continued')
    }

    return (
        <Aux>
            <Modal show={purchasing} closeModel={purchaseCancleHandler}>
                <OrderSummary 
                    ingredients={state.ingredients}
                    purchaseCancle={purchaseCancleHandler}
                    purchaseContinue={purchaseContinueHandler}    
                />
            </Modal>
            <Burger elements={state.ingredients}/>
            <BurgerBuildControls 
                addIngredient={addIngredientHandler} 
                removeIngredient={removeIngredientHandler} 
                price={state.totalPrice}
                purchasable={state.purchasable}
                ordered={PurchaseHandler}
                />

        </Aux>
    )
}

export default BurgerBuilder