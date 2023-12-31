import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

export default function About() {
  const { status, products } = useProducts();

  return <>
    <h2>Shop</h2>
    <div className="products-wrapper">
      { status === 200 && products.map(product => {
        return <ProductCard key={product._id} {...product} />
      })}
      { status !== 200 && status !== 102 && <p>STATUS {status} ERROR</p>}
      { status === 102 && <p>LOADING...</p>}
    </div>
  </>
}