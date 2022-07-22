const Post  = require('../database/post')
const Comment = require('../database/comment')
///get request here

async function getallPosts(req,res,next){
    const {skip,limit} = req.query;
    const posts = await Post.find().skip(skip).limit(limit);

    return res.send({
        data:posts
    })
}


async function getSinglePost(req,res,next){
    const {id} = req.params;

    const post = await Post.findById(id);

    const comments = await Comment.find({
        post:{
            id:post._id
        }
    })
    post.comments = comments;
    return res.send({
        data:post
    })
}




async function createPost(req,res){
    const {post} = req.body
let postDoc = await Post.create(post)

return res.send({
  data:postDoc
})
}


async function updatePost(req,res,next){
    let {id} = req.params;
    let {post:postData} = req.body;

    let post = await Post.findById(id);

    for(const [key,value] of Object.entries(postData)){
        post[key] = value;
    }
    await post.save();
    return res.send({
        data:post
    })
}

//delete

async function deletePost(req,res,next){
    let {id} = req.params;
    await Post.deleteById(id);

    return res.send({
        message:"post has  been deleted"
    })
}




module.exports = {
    createPost,
    getallPosts,
    updatePost,
    getSinglePost,
    deletePost

}