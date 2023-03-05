import React from 'react'
import './Cart.css'

const Cart = ({ recipes }) => {


  return (
    <div className='cart'>
      {console.log(recipes)}
      {recipes.map((ele) => {
        console.log(ele)
        return <div className="TypeofFood">
          {/* <h1>{ele.recipe.label}</h1> */}
        </div>

      })}
    </div>
  )
}

export default Cart;