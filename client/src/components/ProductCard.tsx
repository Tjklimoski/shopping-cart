import useProducts, { Product } from "../hooks/useProducts";
import formatPrice from '../util/formatPrice';
import ShoppingCartControls from '../components/ShoppingCartControls';
import { useShoppingCart } from "../context/ShoppingCartProvider";
import { useCallback } from "react";

export default function ProductCard({ _id, name, price, imgUrl } : Product) {
  const { shoppingCart, addOneToCart } = useShoppingCart();
  const { status, product } = useProducts(false, _id);

  const qty = shoppingCart.find(item => item.id === _id)?.qty || 0;

  //to insure the price is defined when addToCart is clicked.
  const addToCart = useCallback(() => {
    if (status !== 200) return;
    addOneToCart(_id, (product?.price ?? 0))
  }, [_id, status, product, addOneToCart])

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
            <button className="add-to-cart-btn" onClick={addToCart}>+ Add to Cart</button>
          }
        </div>
      </div>
    </div>
  )
}
