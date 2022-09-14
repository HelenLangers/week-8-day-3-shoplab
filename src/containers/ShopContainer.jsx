import React, {useState, useEffect} from "react";



const ShopContainer = () => {
    const [allProducts, setAllProducts] = useState([product1, product2, product3, product4, product5, product6, product7, product8, product9])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [productsInBasket, setProductsInBasket] = useState([])

    product1 = {
        name: "Teddy",
        breed: "Golden Retriever",
        price: 3000,
        description: "A beautiful well behaved boy",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product2 = {
        name: "Jasmin",
        breed: "Street Dog",
        price: 900,
        description: "A hoppy beautiful well behaved girl",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product3 = {
        name: "Scooby Doo",
        breed: "Great Dane",
        price: 10000,
        description: "Good at solving mysteries",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product4 = {
        name: "Scrappy Doo",
        breed: "Great Dane",
        price: 3000,
        description: "Always getting into scraps",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product5 = {
        name: "Button",
        breed: "Great Pyranese",
        price: 5000,
        description: "Big and playful!"
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product6 = {
        name: "Jackson",
        breed: "Golden Labrador",
        price: 1200,
        description: "A very badly behaved boy",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product7 = {
        name: "Lassie",
        breed: "Rough Collie",
        price: 50000,
        description: "Will let you know when someone is stuck in a well",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product8 = {
        name: "Hovis",
        breed: "Border Terrier",
        price: 1500,
        description: "Very loyal and territorial",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }

        product9 = {
        name: "Pippin",
        breed: "Tibetan Terrier",
        price: 7000,
        description: "Playful and well trained...can fly planes",
        image: URL('https://dog.ceo/api/breeds/image/random')
    }





    return (

    )
}