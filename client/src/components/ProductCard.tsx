import { Product } from "../hooks/useProducts";
import formatPrice from '../util/formatPrice';
import ShoppingCartControls from '../components/ShoppingCartControls';

export default function ProductCard({ _id, name, price, imgUrl } : Product) {
  const inCart = true;

  return (
    <div className="product-card">
      <img className="product-img" src={imgUrl} loading="lazy" />
      <div className="product-card-bottom">
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{formatPrice(price)}</span>
        </div>
        <div className="product-cart">
          {inCart ? 
            <ShoppingCartControls id={_id} /> : 
            <button className="add-to-cart-btn">+ Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}
