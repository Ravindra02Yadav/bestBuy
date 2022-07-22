import { createContext, useState } from "react";
export const CartContext =createContext();
export const CartContextProvider = ({children}) =>{
    const [obj, setObj] = useState()

function changeObj(o){
setObj(o)
}
console.log(obj)
return <CartContext.Provider value={{changeObj,obj}} >
    {children}
</CartContext.Provider>
}