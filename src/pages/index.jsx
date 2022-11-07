import React from 'react'
import Navbar from '../components/navbar'
import Carousel from '../components/carousel'
import Main from '../components/main'
import Footer from '../components/footer'
import Product from './product-page'

function Index() {
  return (
    <>
    <Navbar/>
    <div className='main-content'>
    <Carousel/>
    <Main/>
    </div>
    
   
    <Footer/>

    </>
  )
}

export default Index