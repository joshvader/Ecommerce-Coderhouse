import { useState, useEffect } from 'react'
import { arregloProductos } from "../../components/baseDatos/baseDatos"
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const { tipoProducto } = useParams();

  const [productos, setProductos] = useState([]);

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arregloProductos);
    }, 2000)
  })

  useEffect(() => {
    promesa.then(resultado => {
      if (!tipoProducto) {
        setProductos(resultado)
      } else {
        const nuevaLista = resultado.filter(item => item.categoria === tipoProducto);
        setProductos(nuevaLista)
      }
    })
  }, [tipoProducto])
 

  return (
    <div className='py-8 px-8'>

      {/* <p>item list container</p> */}

      <ItemList items={productos} />
    
    </div>
  )
}

export default ItemListContainer