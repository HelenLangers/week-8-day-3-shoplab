import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from "../components/NavBar";
import Home from "../components/Home";
import Basket from "../components/Basket";
import ErrorPage from "../components/Error";






const ShopContainer = () => {
    const [allProducts, setAllProducts] = useState([
      {
        name: 'Teddy',
        breed: 'Golden Retriever',
        price: 3000,
        description: 'A beautiful well behaved boy',
        imageURL:
          'https://www.pdsa.org.uk/media/7648/golden-retriever-gallery-4.jpg?anchor=center&mode=crop&quality=100&height=500&bgcolor=fff&rnd=133020229690000000',
        id: 1,
      },
      {
        name: 'Jasmin',
        breed: 'Street Dog',
        price: 900,
        description: 'A hoppy beautiful well behaved girl',
        imageURL:
          'https://e5d8k3teshb.exactdn.com/wp-content/uploads/2021/10/Jasmin-scaled.jpeg',
        id: 2,
      },
      {
        name: 'Scooby Doo',
        breed: 'Great Dane',
        price: 10000,
        description: 'Good at solving mysteries',
        imageURL:
          'https://comicvine.gamespot.com/a/uploads/scale_medium/11/111746/4579604-characterart-scooby-sd.jpg',
        id: 3,
      },
      {
        name: 'Scrappy Doo',
        breed: 'Great Dane',
        price: 3000,
        description: 'Always getting into scraps',
        imageURL:
          'https://th.bing.com/th/id/R.96e8a8a3ea91f122c7d20992e6e3eafa?rik=8ppnh5qE51XEcQ&pid=ImgRaw&r=0',
        id: 4,
      },
      {
        name: 'Button',
        breed: 'Great Pyranese',
        price: 5000,
        description: 'Big and playful!',
        imageURL:
          'https://vetstreet-brightspot.s3.amazonaws.com/ff/3691e0a75511e0a0d50050568d634f/file/Great-Pyrenees-3-645mk062411.jpg',
        id: 5,
      },
      {
        name: 'Jackson',
        breed: 'Golden Labrador',
        price: 1200,
        description: 'A very badly behaved boy',
        imageURL:
          'https://petkeen.com/wp-content/uploads/2022/02/Golden-Labrador-Retriever-in-the-grass-field.jpg',
        id: 6,
      },
      {
        name: 'Lassie',
        breed: 'Rough Collie',
        price: 50000,
        description: 'Will let you know when someone is stuck in a well',
        imageURL:
          'https://s30387.pcdn.co/wp-content/uploads/2020/02/p19iet100pl4llr0ha31tmc18ts6.jpg',
        id: 7,
      },
      {
        name: 'Hovis',
        breed: 'Border Terrier',
        price: 1500,
        description: 'Very loyal and territorial',
        imageURL:
          'https://dogtime.com/assets/uploads/gallery/border-terrier-dog-breed-pictures/8-face.jpg',
        id: 8,
      },
      {
        name: 'Pippin',
        breed: 'Tibetan Terrier',
        price: 7000,
        description: 'Playful and well trained...can fly planes',
        imageURL: 'https://ichef.bbci.co.uk/images/ic/1200x675/p01lc1y3.jpg',
        id: 9,
      },
    ])
    const [selectedProduct, setSelectedProduct] = useState([])
    const [productsInBasket, setProductsInBasket] = useState([])

    // const inBasketToggle = (id) => { 
    //     const dogToAddToBasket = allProducts.find(product => product.id ===id)
    //     const copyOfBasket = [...productsInBasket, dogToAddToBasket]
    //     setProductsInBasket(copyOfBasket)
    // }

    // const allProductIds = allProducts.map(product => product.id)

    // const allProductIdsInBasket = productsInBasket.map(product => product.id)

    // const filtereredProductIds = allProductIds.filter((product) => !allProductIdsInBasket.includes(product))

    // const filteredItems = allProducts.filter(product => filtereredProductIds.includes(product.id))

    // const addDogBackIntoStore = allProducts

    // const inBasketToggle = (dog) => {
    //     const dogsInBasket = allProducts.filter((product) => { return product.id === dog.id})
    //     const updatedDog = dogsInBasket.map((dog) => {return {...dog, isInBasket: true}})
    //     setProductsInBasket(updatedDog)
    //  }

    const findDog = (dogId) => {
        return allProducts.find((product) => product.id === dogId )
    }

    const addToBasket = (dogId) => {
        const selectedDog = findDog(dogId)
        selectedDog.isInBasket = true
        const dogsInBasket = allProducts.filter((product) => { return product.isInBasket === true})
        setProductsInBasket(dogsInBasket)
    }

    const removeDogFromBasket = (dogId) => {
        const selectedDog = findDog(dogId)
        selectedDog.isInBasket = false
        const dogsInBasket = allProducts.filter((product) => { return product.isInBasket === true})
        setProductsInBasket(dogsInBasket)
    }

    // const addToBasket = (dogId) => {
    //     const selectedDog = allProducts.find((product) => {return product.id === dogId ? {...selectedDog, isInBasket : true} : })
    //     console.log(selectedDog)
        
    // }



    return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path='/'
            element={
              <Home
                products={allProducts}
                addToBasket={addToBasket}
                removeDogFromBasket={removeDogFromBasket}
              />
            }
          />
          <Route
            path='/basket'
            element={
              <Basket
                products={productsInBasket}
                removeDogFromBasket={removeDogFromBasket}
              />
            }
          />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    )
}

export default ShopContainer