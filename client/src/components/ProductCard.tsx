import { Product } from "../hooks/useProducts";

export default function ProductCard({ _id, name, price, imgUrl } : Product) {
  const inCart = false;

  return (
    <div className="product-card">
      <img className="product-img" src={imgUrl} loading="lazy" />
      <div className="product-card-bottom">
        <div className="product-info">
          <h3 className="product-name">{name}</h3>
          <span className="product-price">{price}</span>
        </div>
        <div className="product-cart">
          {inCart ? null : <button className="add-to-cart-btn">+ Add to Cart</button>}
        </div>
      </div>
    </div>
  )
}
