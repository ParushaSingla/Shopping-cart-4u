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
const PORT=process.env.PORT||8089;

app.use('/todos', vendorsR.routes)
app.use('/addProduct',productR.Proutes)
app.use('/user',userR.Uroutes)
app.use('/addToCart',cartR.Croutes)
db.sync()
  .then(() => {
    app.listen(PORT,()=>{
      console.log(`started at localhost:http://localhost:${PORT}`)
    })
  })

