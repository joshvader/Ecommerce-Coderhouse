import {useState} from 'react'
import { createContext } from "react";

export const useCartDetails = createContext();

export default (props) => {

    const [cartProducts, setCartProducts] = useState([])

    const addCartProducts = (product)=> {
        
    setCartProducts(cartProducts.map((item)=>{
        if(item.id === product.id){
            return {...item, quantity:item.quantity + product.quantity};
        }
     else{
        return item;
     }
     
     }))
     
     setCartProducts([...cartProducts, product])
     
    };
    const deleteCartProducts = (id)=> {
        setCartProducts(cartProducts.filter(item => item.id !== id))
    }

    const totalQuantityProduct = cartProducts.reduce((acc, current)=> current.quantity + acc , 0)
    
    return(
        <useCartDetails.Provider value={{cartProducts,addCartProducts,deleteCartProducts, totalQuantityProduct}}>
            {props.children}
        </useCartDetails.Provider>
    )
}