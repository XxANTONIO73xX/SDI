const usersCtrl = {};
const User = require('../models/User');

usersCtrl.createUser = async (req, res) =>{
    const {name, telefono, nickname, password} = req.body;
    const newUser = new User({
        name: name,
        telefono: telefono,
        nickname: nickname,
        password: password
    })
    await newUser.save();
    console.log(newUser)
    res.json({message: 'User registered'});
}

usersCtrl.login = async (req, res) =>{
    const {nickname, password} = req.body;
    var user = await User.findOne({nickname: nickname}).exec();
    if(!user){return res.status(200).send({message: "The username does not exist", goIn: 0});}
    user.comparePassword(password, (error, match)=>{
        if(!match){
            return res.status(200).send({ message: "The password is invalid", goIn: 0 });
        }else{
            userespond = {
                _id: user._id,
                name: user.name,
                nickname: user.nickname
            }
            res.send({ message: "The username and password combination is correct!", goIn: 1, user:userespond});
        }
    });
}

module.exports = usersCtrl;