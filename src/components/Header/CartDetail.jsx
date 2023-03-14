import { useContext } from "react";
import {useCartDetails} from "../../context/useCartDetails";

import imgSmall from "@/assets/images/image-product-1-thumbnail.jpg"
import DeleteIcon from "../icons/DeleteIcon";


export default () => { 

    const {cartProducts,deleteCartProducts} = useContext (useCartDetails)
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
            <p>
              <h6>{product.title}</h6>
              <span>${product.price} x {product.quantity}</span>
              {" "} 
              <span className="font-bold">${product.price * product.quantity }</span>
            </p>
            <button className="ml-auto" onClick={() => deleteCartProducts(product.id)}>
              <DeleteIcon   className="hover:fill-orange-400"/>
            </button>
          </article> 
            ))
          }
          {
            cartProducts.length !== 0 && (
                <div className="px-6 pb-8">
              <button className="w-full py-4 bg-orange-400 rounded-md text-white hover:bg-orange-700">Checkout</button>
            </div>
            )
        }
          
          
        </div>
      </section>

    )
     }