const {Schema, model} = require('mongoose');
const categoriaSchema = new Schema({
    name: {
        type: String, 
        require: true,
        unique: false
    }
}, {
    timestamps: true
});

module.exports = model("Categoria", categoriaSchema);