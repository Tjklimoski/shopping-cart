import React, { useContext } from 'react'

const ShoppingCartContext = React.createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({children : React.ReactElement}) {

  const value = {

  }

  return (
    <ShoppingCartContext.Provider value={value} >
      {children}
    </ShoppingCartContext.Provider>
  )
}
