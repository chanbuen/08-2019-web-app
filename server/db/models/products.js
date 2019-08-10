const db = require('../db')
const Sequelize = require('sequelize')

const Products = db.define('product', {
    name : Sequelize.STRING,
    description : Sequelize.STRING,
    sku : Sequelize.STRING,
    group_id : Sequelize.INTEGER,
    price : {
        type : Sequelize.FLOAT,
        validate : {
            isFloat : true,
        }
    },
    in_stock : Sequelize.BOOLEAN,
    categories : Sequelize.STRING,
    keywords : Sequelize.STRING,
    image : {
        type : Sequelize.STRING,
        validate : {
            isUrl : true,
        }
    },
    image_url: {
        type: Sequelize.STRING,
        get() {
            return ('/' + this.getDataValue('name') + '/' + this.getDataValue('description'))
        }
    },
})

module.exports = Products