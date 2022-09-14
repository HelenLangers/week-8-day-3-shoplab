import React from 'react'
import Product from './Product'

const Basket = ({ products }) => {

    // const listItems = products.map((product) => {
    // return <Product key={product.id} product={product} />
    //     })

    const totalCost = products.reduce((total, product) => {
        return total + product.price
    }, 0)


  return (
    <div>
      <h1>This is the basket</h1>

      <div>
        {products.map(product => {
            return (
              <div>
                <p>{product.name}</p>
                <button onClick={handleClick}>Return Dog To Shelter</button>
              </div>
            )
        })}
      </div>

      Total Basket Price = £{totalCost}



    </div>
  )
}

export default Basket
