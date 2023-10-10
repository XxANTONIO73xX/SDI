const usersCtrl = {};
const User = require('../models/User');

usersCtrl.createUser = async (req, res) =>{
    const {name, nickname, password} = req.body;
    const newUser = new User({
        name: name,
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
    if(!user){return res.status(400).send({message: "The username does not exist", goIn: 0});}
    user.comparePassword(password, (error, match)=>{
        if(!match){
            return res.status(400).send({ message: "The password is invalid", goIn: 0 });
        }else{res.send({ message: "The username and password combination is correct!", goIn: 1 });}
    });
    
}

module.exports = usersCtrl;