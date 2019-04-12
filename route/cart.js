const Croutes = require('express').Router()

const cart2R = require('./cart2')
const {
    db, Todos, ProductTodos, User, CartItems
} = require('../db.js')
Croutes.get('/:id', async (req, res) => {
    //  console.log(req.params.name)
   const item=await CartItems.findAll(
        {
            where: {
                userId: req.params.id
            },
            include:[{model:ProductTodos,
                include: [ Todos] }]
        })
        // let obj={};
        //   obj.productName=item[0]['Producttodo'].name;
         
        
    res.send(item)
})
Croutes.post("/:id", async (req, res) => {
    var c = req.params.id
    var words = c.split('_');
    console.log(words[0])
    const data = await CartItems.findOne({
        where: {
            ProducttodoId: words[0],
            userId: words[1]
        }
    })
    if (data === null || data == undefined) {
        try {
            const result = await CartItems.create({
                quantity: 1,
                ProducttodoId: words[0],
                userId: words[1]
            })
            res.send({ success: true })
        } catch (e) {
            res.send({ success: false, err: e.message })
        }

    }
    else {
        CartItems.findOne({
            where: {
                ProducttodoId: words[0],
                userId: words[1]
            }
        }).then((item) => {
            item.increment({
                quantity: 1
            })
        })
    }
}
)
     Croutes.use('/:id', cart2R.CCroutes)
module.exports = {
        Croutes
    }