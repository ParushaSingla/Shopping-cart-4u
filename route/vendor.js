console.log("hello")
const routes = require('express').Router()
const {
  Todos
} = require('../db.js')

routes.get('/', async (req, res) => {

  const todos = await Todos.findAll()
  res.send(todos)
})

routes.post('/', async (req, res) => {
  //console.log('adding '+req.body.name);
  try {
    const result = await Todos.create({
      name: req.body.name,
    })
    res.send({ success: true })
  } catch (e) {
    res.send({ success: false, err: e.message })
  }
})
deleteUser = (req,res) => {
 console.log(req.params.id)
Todos.destroy({
  where: {
    id: req.params.id
  }
});
}
routes.post("/:id", deleteUser);





module.exports ={
  routes}