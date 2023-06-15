export default function ProductCard() {
  const inCart = false;

  return (
    <div className="product-card">
      <img className="product-img" src="/imgs/product1.jpg" />
      <div className="product-card-bottom">
        <div className="product-info">
          <h3 className="product-name">Milk Chocolate Delight</h3>
          <span className="product-price">$4.95</span>
        </div>
        <div className="product-cart">
          {inCart ? null : <button className="add-to-cart-btn">+ Add to Cart</button>}
        </div>
      </div>
    </div>
  )
}
