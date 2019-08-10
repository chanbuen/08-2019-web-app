const db = require('./db')
const models = require('./models')
const Product = models.Products
// const Test = models.Test

module.exports = {
    db,
    Product,
    // Test
}