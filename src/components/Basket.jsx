import React from 'react'
import Product from './Product'

const Basket = ({ products, removeDogFromBasket }) => {
  const totalCost = products.reduce((total, product) => {
    return total + product.price
  }, 0)

  return (
    <div>
      <h1>This is the basket</h1>
      <div>
        {products.map((product) => {
          return (
            <div>
              <p>{product.name}</p>
              <button onClick={() => removeDogFromBasket(product.id)}>
                Remove Pupper From Basket
              </button>
            </div>
          )
        })}
      </div>
      <div>Total Basket Price = £{totalCost}</div>
      {/* <input
        type='text'
        class='checkout-promo-code-input'
        placeholder='Enter promo code'
        value=''
      ></input> */}
    </div>
  )
}

export default Basket
