import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { navigate, delCart, updateQuantities } from '../actions'

function Cart () {
  const dispatch = useDispatch()
  const reduxCart = useSelector(state => state.cart)
  const [cart, setCart] = useState(reduxCart)

  // const [updatedCart, setUpdatedCart] = useState([])

  function clickNavigate (event) {
    const action = navigate('home')
    dispatch(action)
  }

  const handleDelete = id => event => {
    event.preventDefault()
    const action = delCart(id)
    dispatch(action)
  }

  const handleChange = id => event => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: event.target.value } : item))
  }

  const handleUpdate = event => {
    const action = updateQuantities(cart)
    dispatch(action)
  }

  return (
    <div className='cart'>
      <table>
        <thead>
          <tr>
            <td>Beer</td>
            <td>Quantity</td>
            <td>Remove</td>
          </tr>
        </thead>
        <tbody>
          {cart.map(({ id, name, quantity }) => {
            return (
              <tr key={id}>
                <td>{name}</td>
                <td><input className='update-input' value={quantity} onChange={handleChange(id)}/></td>
                <td><button onClick={handleDelete(id)}><span className='fa fa-trash fa-2x' /></button></td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <p className='actions'>
        <a onClick={clickNavigate}>Continue shopping</a>
        <button onClick={handleUpdate} >Update</button>
        <button className='button-primary'>Checkout</button>
      </p>
    </div>
  )
}

export default Cart
