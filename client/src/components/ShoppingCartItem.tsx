import useProducts from "../hooks/useProducts"
import formatPrice from "../util/formatPrice"
import ShoppingCartControls from "./ShoppingCartControls"

type ShoppingCartItemProps = {
  id: string
  qty: number
}

export default function ShoppingCartItem({ id, qty} : ShoppingCartItemProps) {
  const { status, product } = useProducts(false, id);

  return (
    <div className="shopping-cart-item">
      <img className="shopping-cart-item-img" src={product?.imgUrl}/>
      <div className="shopping-cart-item-info-wrapper">
        <div className="shopping-cart-item-info">
          <span className="shopping-cart-item-name">{product?.name}</span>
          <span className="shopping-cart-item-price">
            {formatPrice(product?.price * qty)}
          </span>
        </div>
        <ShoppingCartControls id={id} qty={qty} />
      </div>
    </div>
  )
}
