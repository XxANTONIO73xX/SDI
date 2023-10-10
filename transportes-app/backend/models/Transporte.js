const {Schema, model} = require("mongoose");
const transporteSchema = new Schema({
    numeroUnidad: {
        type: String,
        require: true
    },
    estado: {
        type: String,
        require: true
    },
    idCentral: {
        type: String,
        require: true
    }
});

module.exports = model("Transporte", transporteSchema);