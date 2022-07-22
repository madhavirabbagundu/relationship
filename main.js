const express = require('express')
const cors = require('cors')
const connectResponse = require('./database/data')
const postRouter = require('./routes/post')
const userRouter = require('./routes/user')

const app = express()
app.use(express.json())
// app.use(cors())

app.use(userRouter);
app.use(postRouter)

app.use(logger);
function logger(req,res,next){
    console.info(new Date(), req.method, req.path);
    next()
}

connectResponse().then(()=>{
app.listen(3003,()=>{
    console.log("server is working at http://localhost:3003")
})
})