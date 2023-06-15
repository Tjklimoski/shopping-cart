import React, { ReactNode, useContext } from 'react'

const ShoppingCartContext = React.createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProps = {
  children: ReactNode
}

export function ShoppingCartProvider({ children } : ShoppingCartProps) {

  const value = {
    shoppingCart,
    addOneToCart,
    removeOneFromCart,
    removeFromCart,
  }

  return (
    <ShoppingCartContext.Provider value={value} >
      {children}
    </ShoppingCartContext.Provider>
  )
}
