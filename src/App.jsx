import { useState } from 'react'
import Navbar from './components/Header/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"Lista de Productos"}/>
    </>
  )
}

export default App
