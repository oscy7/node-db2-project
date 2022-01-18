// STRETCH
const cars = [
  {
    vin: '12345678901234567',
    make: 'Tesla',
    model: 'X',
    mileage: 150000,
    title: 'clean',
    transmission: 'auto'
  },
  {
    vin: '09876543210987654',
    make: 'Tesla',
    model: '3',
    mileage: 1000,
    title: 'clean',
    transmission: 'auto'
  },
  {
    vin: '10831928472345019',
    make: 'Tesla',
    model: 'S',
    mileage: 5000,
    title: 'clean',
    transmission: 'auto'
  },
]

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
