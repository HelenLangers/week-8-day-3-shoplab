import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Basket from "../components/Basket";
import ErrorPage from "../components/Error";






const ShopContainer = () => {
    const [allProducts, setAllProducts] = useState([{
        name: "Teddy",
        breed: "Golden Retriever",
        price: 3000,
        description: "A beautiful well behaved boy",
        imageURL: 'https://dog.ceo/api/breeds/image/random',
        id: 1
    }, {
        name: "Jasmin",
        breed: "Street Dog",
        price: 900,
        description: "A hoppy beautiful well behaved girl",
        imageURL: 'https://dog.ceo/api/breeds/image/random',
        id: 2
    },{
        name: "Scooby Doo",
        breed: "Great Dane",
        price: 10000,
        description: "Good at solving mysteries",
        imageURL:'https://dog.ceo/api/breeds/image/random',
        id: 3
    }, {
        name: "Scrappy Doo",
        breed: "Great Dane",
        price: 3000,
        description: "Always getting into scraps",
        imageURL: 'https://dog.ceo/api/breeds/image/random',
        id: 4
    },{
      name: 'Button',
      breed: 'Great Pyranese',
      price: 5000,
      description: 'Big and playful!',
      imageURL: 'https://dog.ceo/api/breeds/image/random',
      id: 5
    }, {
      name: 'Jackson',
      breed: 'Golden Labrador',
      price: 1200,
      description: 'A very badly behaved boy',
      imageURL: 'https://dog.ceo/api/breeds/image/random',
      id: 6
    },{
      name: 'Lassie',
      breed: 'Rough Collie',
      price: 50000,
      description: 'Will let you know when someone is stuck in a well',
      imageURL: 'https://dog.ceo/api/breeds/image/random',
      id: 7
    },{
        name: "Hovis",
        breed: "Border Terrier",
        price: 1500,
        description: "Very loyal and territorial",
        imageURL: 'https://dog.ceo/api/breeds/image/random',
        id: 8
    }, {
        name: "Pippin",
        breed: "Tibetan Terrier",
        price: 7000,
        description: "Playful and well trained...can fly planes",
        imageURL: 'https://dog.ceo/api/breeds/image/random',
        id: 9
    }
])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [productsInBasket, setProductsInBasket] = useState([])


    




    return (

        <Router>
            <NavBar />
            <Routes>
                <Route exact path='/' element={< Home />} />
                <Route path="/basket" element={< Basket />}/>
                <Route path="*" element={< ErrorPage />} />
            </Routes>
        </Router>

    )
}

export default ShopContainer