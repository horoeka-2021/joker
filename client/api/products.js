import request from 'superagent'

const productsUrl = '/api/v1/products'

export function getProducts () {
  return request.get(productsUrl)
    .then((res) => res.body)
}

export function addProduct (product) {
  return request.post(productsUrl)
    .send(product)
}

export function deleteProduct (id) {
  return request.delete(productsUrl)
    .send({ id: id })
}

export function patchProduct(updatedProduct) {
  return request.patch(productsUrl)
    .send({
      id: updatedProduct.updateId,
      description: updatedProduct.updateDescription,
      name: updatedProduct.updateName,
      country: updatedProduct.updateCountry
  })
}
