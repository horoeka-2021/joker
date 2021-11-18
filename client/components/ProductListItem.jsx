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

      <p className='name'>{product.name}</p>
      <p className="price">$ {product.price}</p>
      {/* <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p> */}
      <p className='description'>{product.details}</p>
      <p>
        {/* <p className='country'>Lovingly made in {product.country}</p> */}
        <button
          className='cart-link'
          onClick={addToCart}>Add to cart</button>
      </p>
    </div>

  )
}

export default ProductListItem
