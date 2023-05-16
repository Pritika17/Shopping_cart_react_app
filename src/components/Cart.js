import React from 'react'
import data from './data'
import Card from './Card'
import "../styles/Cart.css"

const Cart = () => {
  return (
    <section className='products'>
      {
        data.map((item)=> (
          <Card item={item}/>
        ))
      }
    </section>
  )
}

export default Cart