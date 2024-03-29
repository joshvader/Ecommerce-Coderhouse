import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import data from "../../products.json"
//  import { arregloProductos } from "../../components/baseDatos/baseDatos"
// import {db} from "../../firebaseConfig/firebase.js"
import { ItemDetail } from '../ItemDetail/ItemDetail';




export const ItemDetailContainer = () => {
    const {productId} = useParams();

    const [item, setItem] = useState({});

    const getItem = (id) =>{
        return new Promise((resolve,reject)=>{
            const product = data.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(() => {
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    }, [productId])
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}
