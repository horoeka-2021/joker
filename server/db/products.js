const connection = require('./connection')

module.exports = {
  listProducts,
  addProduct,
  deleteProduct,
  updateProduct
}

function listProducts (db = connection) {
  return db('products')
    .select()
}

function addProduct (newProduct, db = connection) {
  return db('products')
    .insert(newProduct)
}

function deleteProduct (id, db = connection) {
  return db('products')
    .where('id', id)
    .delete()
}

function updateProduct (updatedProduct, db = connection) {
  return db('products')
    .where('id', updatedProduct.id)
    .update(updatedProduct)
}
