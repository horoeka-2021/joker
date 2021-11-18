exports.up = knex => {
  return knex.schema.createTable('orders', table => {
    table.increments('id')
    table.date('order_date')
    table.decimal('total_price')
    table.string('status')
  })
}

exports.down = knex => {
  return knex.schema.dropTable('orders')
}
