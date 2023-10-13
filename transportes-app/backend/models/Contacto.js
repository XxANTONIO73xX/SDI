const {Schema, model} = require("mongoose");
const contactoSchema = new Schema({
    nombre: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        require: true
    },
    categoria: {
        type: String,
        require: true
    },
    idUsuario: {
        type: String,
        require: true
    }
});

module.exports = model("Contacto", contactoSchema);