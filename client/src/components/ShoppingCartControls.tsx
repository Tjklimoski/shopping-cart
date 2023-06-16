import { useShoppingCart } from '../context/ShoppingCartProvider';

type ShoppingCartControlsProps = {
  id: string
  qty: number
}

export default function ShoppingCartControls({ id, qty } : ShoppingCartControlsProps) {
  const { addOneToCart, removeOneFromCart, removeFromCart } = useShoppingCart();


  return (
    <div className='shopping-cart-controls-container'>
      <div className="shopping-cart-controls">
        <div className='add-remove-one-wrapper'>
          <button className='remove-one-btn' onClick={() => removeOneFromCart(id)}>-</button>
          <span className='item-qty'>x{qty}</span>
          <button className='add-one-btn' onClick={() => addOneToCart(id)}>+</button>
        </div>
        <button className='remove-from-cart-btn' onClick={() => removeFromCart(id)}>Remove from Cart</button>
      </div>
    </div>
  )
}
