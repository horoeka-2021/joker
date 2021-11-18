
exports.up = function(knex) {
  return knex.schema
    .createTable('products',(tb) => {
      tb.increments('id').primary();
      tb.string('name');
      tb.string('details');
      tb.string('trade_in');
      tb.decimal('price').notNullable();
    })
};


exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('products')
};
