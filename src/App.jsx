import React from 'react'
import Router from './components/Router'
import { CartProvider } from './components/CartContextt';
const App = () => {
  return (
    <>
    <CartProvider>
    <Router></Router>
    </CartProvider>
    </>
  )
}

export default App