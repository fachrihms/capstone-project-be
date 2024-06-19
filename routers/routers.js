const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
    res.status(200).send('welcome')
})

router.get('/createuser', async(req, res) => {
    //create a new user
    try{
        const user = new user(req.body)
        await user.save

        res.status(201).send({user})
    }catch(error){
        res.status(400).send({error})
    }
})

router.post('/userlogin', async(req, res) => {
    try{
        const {email, password} = req.body
        const user = await User.findByCredentials(email, password)
        if(!user){
            return res.status(401).send({error: "Login failed! Check your credentials"})
        }
        res.status(200).send({user})
    }catch(error){
        res.status(400).send({error})
    }
})

module.exports = router