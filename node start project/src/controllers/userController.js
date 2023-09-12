const express = require('express');
const router = express.Router();
const userService = require('../services/userService')


router.get("/:id",async (req,res)=>{
    try {
        const user = await userService.getUser(req.params['id'])
        console.log(user);
        res.send(user);
    } catch (error) {
        console.log(error)
    }
})

router.post('/',async (req,res)=>{
    try {
        const newUser = await userService.postUser(req.body)
        res.send(newUser); 
    } catch (error) {
        console.log(error)
    }
})

router.put('/:id',async (req,res)=>{
    try {
        const updatedUser = await userService.putUser(req.params['id'],req.body)
        res.send(updatedUser);
        
    } catch (error) {
        console.log(error)
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const deletedUser = await userService.deleteUser(req.params['id'])
        res.send(deletedUser)   
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;

