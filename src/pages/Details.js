import React from 'react'

import Breadcrumb from '../components/Breadcrumb'

import Header from '../parts/Header'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

import ProductDetails from 'parts/Details/ProductDetails'
import Suggestion from 'parts/Details/Suggestion'

export default function Details(props) {
  return (
    <>
        <Header theme="black" />

        <Breadcrumb list={[
          { url: "/", name: "Home" },
          { url: "/categories/1234", name: "Office Room" },
          { url: "/categories/1234/products/321", name: "Details" },
        ]} />

        <ProductDetails />
        <Suggestion />

        <Clients />
        <Sitemap />
        <Footer />
    </>
  )
}
