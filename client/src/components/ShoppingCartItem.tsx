import ShoppingCartControls from "./ShoppingCartControls"

export default function ShoppingCartItem() {
  return (
    <div className="shopping-cart-item">
      <img className="shopping-cart-item-img" src="imgs/product1.jpg"/>
      <div className="shopping-cart-item-info-wrapper">
        <div className="shopping-cart-item-info">
          <span className="shopping-cart-item-name">Dark Chocolate with Strawberries</span>
          <span className="shopping-cart-item-price">
            $4.95
          </span>
        </div>
        <ShoppingCartControls id={'test'} />
      </div>
    </div>
  )
}
