import React from 'react'
import './ProductListDesktop.css'
import ProductCard from '../../productCard/ProductCard'


function ProductListDesktop() {
  return (
    <div className='product__list__dk'>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default ProductListDesktop