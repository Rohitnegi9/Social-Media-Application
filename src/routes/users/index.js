const { Router } = require('express')
const {
    createAnonUser,
    getUserById,
    getUserByUsername
} = require('../../controller/users')

const route = Router()

 route.get('/:id', async (req, res) => {
    let user;

    if(isNaN(parseInt(req.params.id)))
    {
        user = await getUserByUsername(req.params.id)
    }else {
        user = await getUserById(req.params.id)
    }

    if(user) {
        res.status(200).send(user)
    }else {
        res.status(404).send({
            error: 'No such user id or username'
        })
    }

})

route.post('/', async (req , res) => {

   // res.send('Hello world')
    const user = await createAnonUser() 

    if(user) {
        res.status(201).send(user)
    }else {
        res.status(404).send({
            error: 'Not able to produce username'
        })
    }
   
})



module.exports = {
    usersRoute: route
}