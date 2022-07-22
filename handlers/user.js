const user = require('../database/user')

async function createUser(req,res){
    const { user1 } = req.body;
    let userDoc = await user.create(user1)
    
    return res.send({
        data:userDoc,
    })
}

async function getAllUsers(req,res){
let users = await user.find();
return res.send({
    data:users
})
}




module.exports = {
    createUser,
    getAllUsers
}