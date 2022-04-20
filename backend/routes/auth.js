const User = require('../models/User')
const express = require('express')
const router = express.Router()

// Creating a User using: POST "/api/auth/". Doesn't require Auth
router.get('/', (req, res)=>{
    const user = User(req.body)
    user.save()
    console.log(req.body)
    res.send(req.body)
})

module.exports = router