import request from 'superagent'

const ordersUrl = '/api/v1/orders'

export function getOrders () {
  return request
    .get(ordersUrl)
    .then((res) => res.body)
}

export function postOrder (order) {
  return request
    .post(ordersUrl)
    .send(order)
}

export function patchOrderStatus (id, newStatus) {
  return request
    .patch(ordersUrl)
    .send({ id, newStatus })
    .then((res) => res.body)
}
