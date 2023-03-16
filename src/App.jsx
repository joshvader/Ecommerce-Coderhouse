import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import CartDetailsProvider from '../src/context/useCartDetails'

function App() {
  

  return (
    <CartDetailsProvider>
      
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
      <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
      
      </Routes>
    
    </CartDetailsProvider>
  )
}

export default App
