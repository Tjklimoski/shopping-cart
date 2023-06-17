import React, { ReactNode, useContext, useState } from 'react'

const ShoppingCartContext = React.createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

type ShoppingCartProps = {
  children: ReactNode
}

type CartItems = {
  id: string
  qty: number
}

export function ShoppingCartProvider({ children } : ShoppingCartProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItems[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  function addOneToCart(id : string) {
    setShoppingCart(currentCart => {
      if (inCart(currentCart, id)) {
        return currentCart.map(item => {
          if (item.id === id) {
            const qty = item.qty + 1
            return {...item, qty };
          }
          return item;
        })
      } else {
        return [...currentCart, { id, qty: 1 }]
      }
    })
  }

  function removeOneFromCart(id : string) {
    setShoppingCart(currentCart => {
      if (!inCart(currentCart, id)) return currentCart;

      const itemToRemoveFrom = currentCart.find(item => item.id === id);
      const qty = (itemToRemoveFrom?.qty || 0) - 1;

      if (qty > 0) {
        return currentCart.map(item => {
          if (item.id === id) return {...item, qty };
          return item;
        })
      } else {
        return currentCart.filter(item => item.id !== id);
      }

    })
  }

  function removeFromCart(id : string) {
    setShoppingCart(currentCart => {
      return currentCart.filter(item => item.id !== id);
    })
  }

  function openCart() {
    setIsOpen(true);    
  }

  function closeCart() {
    setIsOpen(false)
  }

  const value = {
    shoppingCart,
    addOneToCart,
    removeOneFromCart,
    removeFromCart,
    openCart,
    closeCart,
    isOpen,
  }

  return (
    <ShoppingCartContext.Provider value={value} >
      {children}
    </ShoppingCartContext.Provider>
  )
}

function inCart(cart : CartItems[], id : string) {
  return cart.some(item => item.id === id);
}
