const Sequelize = require('sequelize')
const Op = Sequelize.Op

const db = new Sequelize({
  dialect: 'sqlite', // mysql, postgres, mssql
  storage: __dirname + '/todos.db'
  // database : '',
  // host: 'localhost',
  // username: '',
  // password: '',
  // port: ''
})

const Todos = db.define('todo', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
const ProductTodos = db.define('Producttodo', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  }
})
const CartItems = db.define('cartitem', {
  quantity: Sequelize.INTEGER
})
ProductTodos.hasMany(CartItems, { onDelete: 'cascade' })
CartItems.belongsTo(ProductTodos)

User.hasMany(CartItems, { onDelete: 'cascade' })
CartItems.belongsTo(User)


Todos.hasMany(ProductTodos, { onDelete: 'cascade' })
ProductTodos.belongsTo(Todos)


module.exports = {
  db, Todos, ProductTodos, User, CartItems
}
