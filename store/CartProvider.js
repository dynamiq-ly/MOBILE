import { useState, useEffect, useContext, createContext } from 'react'

const CartContext = createContext()
export const _useCart = () => useContext(CartContext)

/**
 * @description context to provide cart for our applications
 * @param {ReactElement} children
 * @return {FC} JSX.Element
 */

export default function CartProvider({ children }) {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>
}
