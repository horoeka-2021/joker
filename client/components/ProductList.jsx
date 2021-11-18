import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../actions/cart'
import { fetchProducts } from '../actions/products'

import ProductListItem from './ProductListItem'

function ProductList (props) {
  const { children, history } = props
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  function addProductToCart (product) {
    const { id, name } = product
    const newCartItem = { id, name }
    dispatch(addToCart(newCartItem))
    history.push('/cart')
  }

  return (
    <div className='productlist'>
      <div className='welcome'>
        <p>
          Welcome! Please choose from our Unique selection &#33; <br />
          <span>Pak &#38; Spend More &#46; &#46; &#46;
&#36;
&#36;
&#36; </span>
        </p>
      </div>
      <div className='shopping-card'>
        {children} {/* This holds the WaitIndicator (from App) */}
        {products.map(product => {
          return (
            <ProductListItem
              key={product.id}
              product={product}
              addToCart={addProductToCart}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductList
