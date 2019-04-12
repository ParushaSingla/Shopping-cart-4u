
const Proutes = require('express').Router()
const {
  ProductTodos,Todos
} = require('../db.js')

Proutes.get('/', async (req, res) => {
console.log("in get")
  const ProductTodo = await ProductTodos.findAll({include: [Todos]})
  res.send(ProductTodo)
})

Proutes.post('/', async(req, res) => {

    try {
      const result = await ProductTodos.create({
        name: req.body.name,
        type:req.body.type,
        quantity:req.body.quantity,
        price:req.body.price,
        todoId:req.body.todoId
      })
      res.send({ success: true })
    } catch (e) {
      res.send({ success: false, err: e.message })
    }
  })
  deleteUser = (req,res) => {
    console.log(req.params.id)
    ProductTodos.destroy({
     where: {
       id: req.params.id
     }
   });
   }
   Proutes.post("/:id", deleteUser);
module.exports ={
    Proutes}