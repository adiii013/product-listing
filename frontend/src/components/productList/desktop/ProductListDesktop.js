import React from 'react'
import './ProductListDesktop.css'
import ProductCard from '../../productCard/ProductCard'
import { useSelector } from 'react-redux'

function ProductListDesktop() {
  const products = useSelector((state)=>state.product.productList);
  return (
    <div className='product__list__dk'>
      {
        (products.length>0) ? 
        products.map((product)=><ProductCard  product={product} />)
        : <div/>
      }
    </div>
  )
}

export default ProductListDesktop