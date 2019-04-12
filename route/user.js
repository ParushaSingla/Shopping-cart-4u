const Uroutes = require('express').Router()
const {
  User
} = require('../db.js')

Uroutes.get('/:name', async (req, res) => {
//  console.log(req.params.name)
  const Usertodos = await User.findAll(
      {
          where:{
             'name':req.params.name
          }
      }
  )
 // console.log(Usertodos)
  res.send(Usertodos)
})
module.exports ={
    Uroutes}