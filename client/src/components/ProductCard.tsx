import { Product } from "../hooks/useProducts";
import formatPrice from '../util/formatPrice';
import ShoppingCartControls from '../components/ShoppingCartControls';
import { useShoppingCart } from "../context/ShoppingCartProvider";

export default function ProductCard({ _id, name, price, imgUrl } : Product) {
  const { shoppingCart, addOneToCart } = useShoppingCart();

  const qty = shoppingCart.find(item => item.id === _id)?.qty || 0;

  return (
    <div className="product-card">
      <img className="product-img" src={imgUrl} loading="lazy" />
      <div className="product-card-bottom">
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{formatPrice(price)}</span>
        </div>
        <div className="product-cart">
          {qty > 0 ? 
            <ShoppingCartControls id={_id} qty={qty} /> : 
            <button className="add-to-cart-btn" onClick={() => addOneToCart(_id)}>+ Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}
