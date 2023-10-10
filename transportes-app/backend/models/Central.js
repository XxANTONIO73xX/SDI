const {Schema, model} = require('mongoose');
const centralSchema = new Schema({
    name: {
        type: String, 
        require: true,
        unique: false
    },
    longitud: Number,
    latitud: Number
}, {
    timestamps: true
});

module.exports = model("Central", centralSchema);