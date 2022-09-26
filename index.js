
const express = require('express')
const app = express ()

const PORT = process.env.PORT || 4000


const morgan = require('morgan')
const cors = require('cors')



const postRoutes = require("./routes/postRoutes")
const userRoutes = require("./routes/userRoutes")
const multer = require('multer')
const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary')

require('./db/connection')
require('dotenv').config()

app.use(morgan('tiny'))
app.use(cors())
app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    // res.redirect('/post')
    res.json('Welcome to Shoutout!')
})

app.use('/post', postRoutes)
app.use('/user', userRoutes)

app.listen(PORT, () => {
    console.log('You are connected on the porty, Shorty', PORT)
})