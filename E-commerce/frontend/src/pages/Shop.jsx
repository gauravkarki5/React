import React from 'react'
import Hero from '../component/hero/Hero'
import Popular from '../component/popular/Popular'
import Offers from '../component/Offers/Offers'
import NewCollection from '../component/NewCollection/NewCollection'
import NewsLetter from '../component/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
      <NewCollection></NewCollection>
      <NewsLetter></NewsLetter>
    </div>
  )
}

export default Shop
