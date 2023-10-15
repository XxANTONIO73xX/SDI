const {Schema, model} = require('mongoose')
const Bcrypt = require("bcryptjs");
const userSchema = new Schema({
    name: String,
    nickname: {
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    } 
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = Bcrypt.hashSync(this.password, 10);
    next();
});

userSchema.methods.comparePassword = function(plaintext, callback) {
    return callback(null, Bcrypt.compareSync(plaintext, this.password));
};
module.exports = model('User', userSchema);