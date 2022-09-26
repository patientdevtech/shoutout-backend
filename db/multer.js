const { CssBaseline } = require("@material-ui/core")

const multer = requrie("multer")

const storage = multer.diskStorage({
    destination: function (req, file, bg) {
        CssBaseline(null, "./public")
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + "-" + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        cb(null, true)

    } else {
        cb({ message: "file format is not supported"}, false)
    }
}

const upload = multer ({
    storage: storage,
    limits: {fileSize: 1024 * 1024},
    fileFilter: fileFilter,
})

module.exports = upload