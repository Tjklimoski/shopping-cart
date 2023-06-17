import { useShoppingCart } from '../context/ShoppingCartProvider'
import ShoppingCartItem from './ShoppingCartItem';

export default function ShoppingCart() {
  const { shoppingCart, closeCart, isOpen } = useShoppingCart();
  const cartTotal = '$15.76';

  return (
    <div className={`shopping-cart-wrapper ${isOpen ? 'active' : ''}`}>
      <div className='shopping-cart'>
        <div className='shopping-cart-header'>
          <h2>Cart</h2>
          <button className="shopping-cart-close" onClick={closeCart}>&times;</button>
        </div>
        {shoppingCart.map(cartItem => {
          return <ShoppingCartItem key={cartItem.id} {...cartItem} />
        })}
        <div className='shopping-cart-total'>
          TOTAL: {cartTotal}
        </div>
      </div>
    </div>
  )
}
