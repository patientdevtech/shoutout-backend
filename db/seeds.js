require('./connection')

const Post = require('../models/Post')

const posts = [
    {
        name: "Patient Devtech",
        src: "",
        profile: "https://imgur.com/qmDwxqs.png",
    },
    {
        name: "Planner Friend",  
        src: "",
        profile: "https://imgur.com/r0n6msN.png",
    },    
    {
        name: "Famous Friend",
        src: "",
        profile: "https://imgur.com/mGX739w.png",
    },
    {
        name: "Car Pics Friend",
        src: "",
        profile: "https://imgur.com/SEcPvDJ.png",
    },
    {
        name: "Plant Friend",
        src: "",
        profile: "https://imgur.com/MvwillM.png",
    },
    {
        name: "Party Friend",
        src: "",
        profile: "https://imgur.com/bGMczBx.png",
    },
    {
        name: "Goody-Goody Friend",
        src: "",
        profile: "https://imgur.com/pY9B0Cx.png",
    },
    {
        name: "OverShare Friend",
        src: "",
        profile: "https://imgur.com/QcyTZFP.png",
    },
    {
        name: "Thaaaat Friend",
        src: "",
        profile: "https://imgur.com/xR9idiv.png",
    },
      {
        name: "Billy G",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
    {
        name: "Billy H",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",
    },
]

Post.deleteMany({})
.then(() => {
    return Post.insertMany(posts)
})
.then((insertedPosts) => {
    console.log(insertedPosts)
})
.catch(err => console.error(err))
.finally(() => {
    process.exit()
})

