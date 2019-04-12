const express = require('express')
const vendorsR = require('./route/vendor')
const productR=require('./route/product')
const userR=require('./route/user')
const cartR=require('./route/cart')
const {
  db
} = require('./db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/',
  express.static(__dirname + '/public')
)

app.use('/todos', vendorsR.routes)
app.use('/addProduct',productR.Proutes)
app.use('/user',userR.Uroutes)
app.use('/addToCart',cartR.Croutes)
db.sync()
  .then(() => {
    app.listen(8089)
  })

