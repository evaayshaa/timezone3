import React from 'react'
import Layout from '../../components/layout/Layout'
import Hero from '../../components/hero/Hero'
import Arrivals from '../../components/arrivals/Arrivals'
import Products from '../../components/products/Products'

const Home = () => {
  return (
  <Layout>
    <Hero/>
    <Products/>
    <Arrivals/>
  </Layout>
  )
}

export default Home
