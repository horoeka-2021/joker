import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { insertProduct, removeProduct, updateProduct } from '../actions/products'

function Admin () {
  const dispatch = useDispatch()
  const [input, setInput] = useState({
    description: '',
    name: '',
    country: 'New Zealand'
  })
  const [deleteProduct, setDeleteProduct] = useState(0)
  const [updatedProduct, setUpdatedProduct] = useState({
    updateId: 0,
    updateDescription: '',
    updateName: '',
    updateCountry: ''
  })

  function handleInput (e) {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  function handleSetDelete (e) {
    setDeleteProduct(Number(e.target.value))
  }

  function handleSubmit () {
    dispatch(insertProduct(input))
    setInput({
      description: '',
      name: '',
      country: 'New Zealand'
    })
  }

  function handleDelete () {
    isNaN(deleteProduct) ? alert('submit a number dork!') : dispatch(removeProduct(deleteProduct))
    setDeleteProduct(0)
  }

  function handleUpdateChange(e) {
    setUpdatedProduct({...updatedProduct, [e.target.name]: e.target.value})
  }

  function handleUpdateSubmit() {
    isNaN(updatedProduct.updateId) ? alert('submit a number dork!') : dispatch(updateProduct(updatedProduct))
    setUpdatedProduct({
      updateId: 0,
      updateDescription: '',
      updateName: '',
      updateCountry: ''
    })
  }
  return (
    <div>
      <p>Add a new product here!</p>
      <input type="text" placeholder="description" name="description" value={input.description} onChange={handleInput} />
      <input type="text" placeholder="name" name="name" value={input.name} onChange={handleInput}/>
      <input type="text" placeholder="country" name="country" value={input.country} onChange={handleInput}/>
      <button onClick={handleSubmit}>Add new product</button>
      <br />
      <p>Delete a product from the catalogue</p>
      <input type="text" value={deleteProduct} onChange={handleSetDelete}/>
      <button onClick={handleDelete}>Delete product</button>
      <br />
      <p>Update a product</p>
      <input type="text" placeholder="id" name="updateId" value={updatedProduct.updateId} onChange={handleUpdateChange} />
      <input type="text" placeholder="description" name="updateDescription" value={updatedProduct.updateDescription} onChange={handleUpdateChange} />
      <input type="text" placeholder="name" name="updateName" value={updatedProduct.updateName} onChange={handleUpdateChange} />
      <input type="text" placeholder="country" name="updateCountry" value={updatedProduct.updateCountry} onChange={handleUpdateChange} />
      <button onClick={handleUpdateSubmit}>Update product</button>
    </div>
  )
}

export default Admin
