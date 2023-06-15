import React from 'react';
import { useShoppingCart } from '../context/ShoppingCartProvider';

type ShoppingCartControlsProps = {
  id: string
}

export default function ShoppingCartControls({ id } : ShoppingCartControlsProps) {
  const qty = 3

  return (
    <div className='shopping-cart-controls-container'>
      <div className="shopping-cart-controls">
        <div className='add-remove-one-wrapper'>
          <button className='remove-one-btn'>-</button>
          <span className='item-qty'>x{qty}</span>
          <button className='add-one-btn'>+</button>
        </div>
        <button className='remove-from-cart-btn'>Remove from Cart</button>
      </div>
    </div>
  )
}
