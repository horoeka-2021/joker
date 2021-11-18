import React from 'react'
import { useDispatch } from 'react-redux'
import { navigate, addCart } from '../actions'

function BeerListItem (props) {
  const { id, name, brewery, country, abv } = props.beer
  const dispatch = useDispatch()

  function clickHandler (event) {
    const action = navigate('cart')
    dispatch(action)
    const action2 = addCart({ id, name })
    dispatch(action2)
  }

  return (
    <div className='beer'>
      <p className='name'>{name}</p>
      <p className='description'>{brewery}</p>
      <p>
        <span className='country'>{country}</span>
        <span className='abv'>{abv} abv</span>
        <a className='cart-link' onClick={clickHandler}>Add to cart</a>
      </p>
    </div>
  )
}

export default BeerListItem
