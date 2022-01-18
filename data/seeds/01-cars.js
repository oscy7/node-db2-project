// STRETCH
const cars = [
  {
    vin: '12345',
    make: 'Tesla',
    model: 'X',
    mileage: 150000,
    title: 'clean',
    trasmission: 'auto'
  },
  {
    vin: '1234511',
    make: 'Tesla',
    model: '3',
    mileage: 1000,
    title: 'clean',
    trasmission: 'auto'
  },
  {
    vin: '1234522',
    make: 'Tesla',
    model: 'S',
    mileage: 5000,
    title: 'clean',
    trasmission: 'auto'
  },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
