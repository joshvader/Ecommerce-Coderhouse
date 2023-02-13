import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Header/Navbar'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path='/' element={<ItemListContainer />}/>
      <Route path="/productos/:tipoProducto" element={<ItemListContainer />}/>
      <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
      
    </>
  )
}

export default App
