const Post = require('../models/Post')

const index = (req, res) => {
    Post.find({}, (err, posts) => {
        if (err) {
        res.status(400).json(err)
        return
    }
    res.json(posts)
})
.populate("owner")
}

const showOnePost = (req, res) => {
    Post.findById(req.params.id, (err, post) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(post)
    })
}

const createNewPost = async (req, res) => {
    console.log(req.file)
    if (req.file){
        req.body.images = req.file.path
    }
    console.log(req.body)
    let newPost = await Post.create(req.body)
    newPostsave(() => console.log("This post has been saved!"))
    Post.findbyId(newPost._id)
    .populate("owner")
    res.json(newPost)
}

const updatePost = (req, res) => {
    console.log(req.file);
    if (req.file) {
        req.body.images = req.file.path
    }
    console.log(req.body);
    Post.findByIdAndUpdate(req.params.id, req.body, (err,post) => {
        if(err){
            res.status(400).json(err)
            return
        }    
        Post.find({}, (error, posts) => {
            res.json(posts)
        })
    })
    .populate("owner")
}

const deletePost = (req, res) => {
    Post.findByIdAndDelete(req.params.id, (err, post) => {
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(post)
    })
}

const newRoute = (req, res) => {
    res.render("new")
}

const editRoute = (req, res) => {
    res.render("edit", { post: Post, ide: req.params.id })
}

module.exports = {
    index,
    showOnePost,
    createNewPost,
    updatePost,
    deletePost,
    newRoute,
    editRoute
}
