import React from 'react'
import Navbar from './components/navbar'
import HeaderImage from './components/HeaderImage'
import ImageContainers from './components/ImageContainers'
import ProductImage from './components/productImage'
import ProductItems from './components/ProductItems'

const App = () => {
  return (
    <>
    <div className='overflow-x-hidden'>

    <Navbar/>
    <HeaderImage/>
    <ImageContainers/>
    <ProductImage/>
    <ProductItems />
    <ProductItems />
    <ProductItems />
   
    </div>
    </>
  )
}

export default App
