import { Link } from "react-router-dom";
import { MdShoppingCart } from 'react-icons/md'

export default function Nav() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
      </div>
      <button>
        <MdShoppingCart />
      </button>
    </nav>
  )
}
