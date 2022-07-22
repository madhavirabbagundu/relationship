const express = require('express')

const { createPost, getallPosts, getSinglePost,updatePost, deletePost } = require('../handlers/post')

const postRouter = express.Router()

postRouter.get('/posts',getallPosts)
postRouter.get('/posts/:id',getSinglePost)
postRouter.post('/posts',createPost)
postRouter.patch('/posts/:id',updatePost)
postRouter.delete('./post/:id',deletePost)


module.exports = postRouter