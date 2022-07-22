const express = require('express');
const { getAllUsers,createUser } = require('../handlers/user')

const userRouter = express.Router()

userRouter.get('/users/all',getAllUsers)
userRouter.post('/users/all',createUser)

module.exports = userRouter
