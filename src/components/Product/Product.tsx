import { ProductProps } from "./types";
import './styles.css'

function Product({ name, price }: ProductProps) {
  return (
    <div className="product-card-container">
      <h2>{name}</h2>
      <div>{price.toFixed(2)}</div>
    </div>
  )
}

export default Product;
