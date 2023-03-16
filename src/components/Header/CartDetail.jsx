import { useContext } from "react";
import {useCartDetails} from "../../context/useCartDetails";

import DeleteIcon from "../icons/DeleteIcon";
import appFirebase from "../../firebaseConfig/firebase";

import {getFirestore, collection, addDoc} from "firebase/firestore"

const db = getFirestore(appFirebase)

export default () => { 

    const {cartProducts,deleteCartProducts, clearProductsList} = useContext (useCartDetails)


    

    //esta función es para guardar la venta en la api o base de datos
    const saveInfo = async()=>{
      try {
        await addDoc(collection(db, 'ventas'),{
          ...arreglo, subtotal
        })
      } catch (error) {
        alert('ocurrio un error')
        console.log(error)
      }
        

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Su compra va en camino',
  showConfirmButton: false,
  timer: 1500,

})


    }

    const subtotal = cartProducts.reduce((a,c)=>a+c.quantity*c.price,0);
    const arreglo = cartProducts;

    // Al guardar la información en Firestore procede a limpiar la lista de CartDeail
  function checkOut ()  {
    saveInfo();
    clearProductsList()
  }
    
    return (
        <section className="absolute top-28 left-0 z-10 w-full md:max-w-md  md:left-full md:top-20 md:-translate-x-full">
        <div className="mx-4 rounded-md bg-gray-100 drop-shadow-md">
          <h4 className="px-6 py-8 font-bold text-lg">Cart</h4>
          <hr />
          {
            cartProducts.length === 0 && <p className="py-10 text-center">Yout cart is empty</p>
          }
          {
            cartProducts.map((product)=>(
            <article  key={product.id}className="grid grid-cols-[1fr_4fr_1fr] gap-6 px-6 py-8 items-center ">
            <img src={product.img} alt="" className="rounded-md" />
            <div>
              <h6>{product.title}</h6>
              <span>${product.price} x {product.quantity}</span>
              {" "} 
              <span className="font-bold">${product.price * product.quantity }</span>
            </div>
            <button className="ml-auto" onClick={() => deleteCartProducts(product.id)}>
              <DeleteIcon   className="hover:fill-orange-400"/>
            </button>
          </article> 
            ))
           
          }
          <div className="ml-4 p-2 text-center">Subtotal: ({cartProducts.reduce ((a,c)=> a + c.quantity, 0)}): $
           {cartProducts.reduce((a,c)=> a + c.quantity * c.price, 0)}
           </div>
          
          {
            cartProducts.length !== 0 && (
              
                <div className="px-6 pb-8">
              <button className="w-full py-4 bg-orange-400 rounded-md text-white hover:bg-orange-700" onClick={checkOut}>Checkout</button>
            </div>
            )
        }
          
          
        </div>
      </section>

    )
     }