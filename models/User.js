const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

userSchema.set('toJSON', {
    transorm: function (doc, ret) {
        delete ret. password;
        return ret
    }
})

userSchema.methods.comparePasssword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb)
}

userSchema.pre('save', function(next){
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash){
        if(err) return next(err);
        user.password = hash;
        next();

    })
})

module.exports = mongoose.model('User', userSchema)