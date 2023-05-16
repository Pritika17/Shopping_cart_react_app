import React, { useState } from 'react'
import Nav from './Nav'
import Cart from './Cart'
import CartItems from './CartItems'

const Home = () => {
  const [show, setShow] = useState(true)
  const [cart, setCart] = useState([])
  return (
    <>
     <Nav/>
     <Cart/>
     <CartItems/>
    </>
  )
}

export default Home 