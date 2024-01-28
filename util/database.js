// const mysql = require("mysql2")



// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: '7488552785aA@'
// })

// module.exports = pool.promise()


const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-complete','root','7488552785aA@',
    {dialect: 'mysql',
     host: 'localhost'
    })

module.exports = sequelize 