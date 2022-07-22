import React from 'react'
import NavBar from '../components/NavBar'
import { useContext } from 'react'
import { CartContext } from '../components/Context/CartContext'

const Cart = () => {
    const change = useContext(CartContext)
console.log(change)
  return (
    <>
<NavBar/>

    </>
  )
}

export default Cart