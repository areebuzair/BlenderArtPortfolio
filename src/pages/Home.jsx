import React from 'react'
import Introduction from '../components/Introduction'
import Products from '../components/Products'
import '../Home.css'

export default function Home() {
  return (
    <section className='home'>
        <Introduction />
        <Products />
    </section>
  )
}
