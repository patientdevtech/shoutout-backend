const mongoose = require('mongoose');

const postSchema = new mongoose.Schema ({
    image: String,
    description: String,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
},
{timestamps: true}    
)

const Post = mongoose.model("Post", postSchema)

module.exports = Post