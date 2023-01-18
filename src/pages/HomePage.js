import React from 'react'

import Header from '../parts/Header'
import Hero from '../parts/HomePage/Hero'
import JustArrived from '../parts/HomePage/JustArrived'
import BrowseRoom from '../parts/HomePage/BrowseRoom'
import Clients from '../parts/Clients'
import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage(props) {
  return (
    <>
        <Header theme="black" />
        <Hero />
        <BrowseRoom />
        <JustArrived />
        <Clients />
        <Sitemap />
        <Footer />
    </>
  )
}
