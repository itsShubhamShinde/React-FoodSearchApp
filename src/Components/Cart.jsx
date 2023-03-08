import React from 'react'
import './Cart.css'

const Cart = ({ recipes }) => {


    return (
        <div className="cartDiv">
            {recipes.length ==0 ? <h1>result not found</h1> : 
            recipes.map((ele) => {
                return <div className='menuDiv'>
                   
                    <div className="headingDiv">
                        <h1>{ele.recipe.label}</h1>
                    </div>
                    <hr/>
                    <div className="orderlistDiv">
                        <ol>
                            {ele.recipe.ingredientLines.map((ingredient, index) => {
                                if (index <= 4) {
                                    return <li>{ingredient}</li>
                                }
                            })}
                        </ol>
                    </div>
                    <hr/>
                    <div className='imageDiv'>
                        <p>Calories: {ele.recipe.calories.toFixed(0)}</p>
                        <img src={ele.recipe.image} alt={ele.recipe.label} />

                    </div>

                </div>
            })}
        </div>
    )
}

export default Cart;