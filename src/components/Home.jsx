import React from "react";
import Product from "./Product";

const Home = ({products, inBasketToggle}) => {

    const listItems = products.map((product) => {
    return <Product key={product.id} product={product} inBasketToggle={inBasketToggle} /> })

    return (
        <div>
            <h1>This is a shop</h1>
            {listItems}
        </div>
    )
}


export default Home