const CCroutes = require('express').Router()

const {
    db, Todos,ProductTodos,User,CartItems
} = require('../db.js')


CCroutes.post("/:id", async (req, res) => {
     console.log(req.params.id)})

module.exports ={
    CCroutes}