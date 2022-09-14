import React from "react";
import styled from "styled-components";

// const Image = styled.img`
// max-width: 50px;
// `

const Product = ({product, addToBasket}) => {


    // const handleClick = () => {
    //     inBasketToggle(product)

    // }

    const inBasketText = product.isInBasket ? "Reserved" : "Adopt This Dog"

        // const dogsInBasket = allProducts.filter((product) => { return product.id === dog.id})


    return (  
      <div>
        <img src={product.imageURL} width='150' height='150'/>
        <h2>Name: {product.name}</h2>
        <p>Breed: {product.breed}</p>
        <p>Adoption Fee: £{product.price}</p>
        <p>In Basket: {product.inBasket}</p>
        <button onClick={() => addToBasket(product.id)}>{inBasketText} </button>
      </div>
    )
}

export default Product