const express = require('express');
const backRouter = express.Router();
const User = require('../models/user.models');
//GET all response

backRouter.get('/', (req,res) => {
    res.json({mssg: 'Hello World! fuck'});
});
//get a singel response
backRouter.get('/:id', (req, res) => {
    res.json({mssg:'get a single user'});
})

//POST
backRouter.post('/', async(req, res) => {
    const {username, email, password, confirmPassword} = req.body;

    try {
        const user = await User.create({
            username, email, password, confirmPassword
        })
        res.status(200).json({user});
        
    } catch (error) {
       res.status(400).json({error: error.message}); 
    }
    res.json({mssg:'post a user'});
})
//delete
backRouter.delete('/:id', (req, res) => {
    res.json({mssg:' Delete user'});
})
//patch
backRouter.patch('/:id', (req, res) => {
    res.json({mssg:'patch a user'});
})
// Define the user routes here

module.exports = backRouter;
