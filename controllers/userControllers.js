const User = require("../models/user")
const jwt = require('jsonwebtoken')
const SECRET = 'opalpooped'

async function signup(req, res) {
    const user = new User(req.body);
    try {
        await user.save()
        const token = createJWT(user)
        res.json({token})
    } catch (err) {
        res.status(400).json(err)
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({name: req.body.name})
        if (!user) return res.status(401).json({err: 'Those credentials are no good'})
        user.comparePassword(req.body.password, (err, isMatch) => {
            if (isMatch) {
                const token = createJWT(user)
                res.json({token})
            } else {
                return res.status(401).json({err: 'Password is incorrect'})    
            }
        })
    } catch (err) {
        return res.status(400).json(err)
    }    
}



function createJWT(user) {
    return jwt.sign(
        {user},
        SECRET,
        {expriesIn: '72h'}
    )
}

module.exports = {
    signup,
    login
}