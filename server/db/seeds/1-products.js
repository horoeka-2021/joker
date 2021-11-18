exports.seed = knex => {
  return knex('products').insert([
    {
      id: 1,
      name: 'Javascript injection',
      details: 'New Zealand',
      trade_in: 'Wearing dinausour costume for your life',
      price: 10000.00
    }, {
      id: 2,
      name: "Ahmad's Banana logic",
      details: 'Functioning fruit',
      trade_in: 'One for loop exercise',
      price: 20
    }, {
      id: 3,
      name: 'Intelligent coding brain',
      details: 'An automatic brain tumor based on texture features',
      trade_in: 'Lost sense of humor 20years',
      price: 500000
    }, {
      id: 4,
      name: 'mechanical keyboard',
      details: 'Fruit keyboard that you can type and eat without text code',
      trade_in: 'Only eat fruit for 30days',
      price: 500
    }
  ])
}
