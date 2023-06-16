import { Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'
import { useShoppingCart } from "../context/ShoppingCartProvider";

export default function Nav() {
  const { shoppingCart, openCart } = useShoppingCart();

  const cartQty = shoppingCart.reduce((qtyTotal, item) => {
    return qtyTotal + item.qty;
  }, 0)

  return (
    <nav id="navbar">
      <h1 className="company-name">Chocolate</h1>
      <div className="links-wrapper">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
      <button className="shopping-cart-btn" onClick={openCart}>
        <MdShoppingCart />
        { cartQty > 0 &&
          <div className="cart-qty">
            {cartQty}
          </div>
        }
      </button>
    </nav>
  )
}
