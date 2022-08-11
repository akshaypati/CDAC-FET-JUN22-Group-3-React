const usersController = require('../controllers/usercontroller.js')


//routers

const router = require('express').Router()

//use router

router.post('/addPerson', usersController.addPerson)





module.exports = router