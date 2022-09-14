import React from "react";
import styled from "styled-components";

// const Image = styled.img`
// max-width: 50px;
// `

const Product = ({product, inBasketToggle}) => {


    const handleClick = () => {
        inBasketToggle(product.id)

    }

    const inBasketText = product.inBasket ? "Reserved" : "Adopt This Dog"

    return (
      <div>
        <img src={product.imageURL} width='150' height='150'/>
        <h2>Name: {product.name}</h2>
        <p>Breed: {product.breed}</p>
        <p>Adoption Fee: £{product.price}</p>
        <button onClick={handleClick}>{inBasketText} </button>
      </div>
    )
}

export default Product