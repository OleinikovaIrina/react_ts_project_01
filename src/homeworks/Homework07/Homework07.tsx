import { v4 } from "uuid";

import Product from "../../components/Product/Product"
import { productsData } from "./data"
import './styles.css'

function Homework07() {
    const productCards = productsData.map((product)=>{
      return<Product
        key={v4()} 
        name={product.name}
        price={product.price}/>
      // return <Product name = "Tee" price={45}   />
    })
    return (
      <div className='cards-wrapper'>
        {productCards}
      </div>
    )

  }



        
export  default Homework07
