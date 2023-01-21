import React from 'react'

import Breadcrumb from '../components/Breadcrumb'

import ShoppingCart from 'parts/Cart/ShoppingCart'
import ShippingDetails from 'parts/Cart/ShippingDetails'

import Header from '../parts/Header'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function Cart(props) {
  return (
    <>
        <Header theme="black" />

        <Breadcrumb list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]} />

        <section className="md:py-12">
          <div className="container mx-auto px-8 md:px-10 lg:px-16">
            <div className="flex -mx-4 flex-wrap">
              <ShoppingCart />
              <ShippingDetails />
            </div>
          </div>
        </section>

        <Sitemap />
        <Footer />
    </>
  )
}
