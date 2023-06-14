import { Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'

export default function Nav() {
  const cartQty = 5;

  return (
    <nav id="navbar">
      <h1 className="company-name">Chocolate</h1>
      <div className="links-wrapper">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/shop">Shop</Link>
        <Link className="nav-link" to="/about">About</Link>
      </div>
      <button className="shopping-cart-btn">
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
