import React from 'react'

function ProductListItem (props) {
  const product = props.product

  function addToCart () {
    props.addToCart(product)
  }

  return (
    // <div className='product'>
    //   <p className='name'>{product.name}</p>
    //   <p className='description'>{product.description}</p>
    //   <p>
    //     <span className='country'>Lovingly made in {product.country}</span>
    //     <button
    //       className='cart-link'
    //       onClick={addToCart}>Add to cart</button>
    //   </p>
    // </div>
    <div className="card">

      <img className="product-image" src={`/images/${product.id}.jpg`}/>
      <p className='name'>{product.name}</p>
      <p className="price">$ {product.price}</p>
      <p className='details'>{product.details}</p>
      <p className='trade_in'><span>Trade in:</span> <br />{product.trade_in}</p>

      <p>
        <button
          className='cart-link'
          onClick={addToCart}>Add to cart</button>
      </p>
    </div>

  )
}

export default ProductListItem
