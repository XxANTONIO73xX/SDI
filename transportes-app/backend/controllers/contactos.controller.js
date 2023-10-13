const contactoCtrl = {};
const Contacto = require('../models/Contacto');

contactoCtrl.getContactos = async (req, res) => {
    const contacto = await Contacto.find({idUsuario: req.params.id});
    res.json(contacto)
}

contactoCtrl.createContacto = async (req, res) => {
    const {nombre, apellidos, categoria, idUsuario} = req.body;
    const newContacto = new Contacto({
        nombre: nombre,
        apellidos: apellidos,
        categoria: categoria,
        idUsuario: idUsuario
    });
    await newContacto.save();
    res.json({message: 'Contacto Saved'})
}

contactoCtrl.getContacto = async (req, res) =>{
    const contacto = await Contacto.findById(req.params.id);
    res.json(contacto);
}

contactoCtrl.updateContacto = async (req, res) =>{
    const {nombre, apellidos, categoria} = req.body;
    await Contacto.findOneAndUpdate({_id: req.params.id}, {
        nombre, apellidos, categoria
    });
    res.json({message: 'Contacto Updated'})
}

contactoCtrl.deleteContacto = async (req, res) =>{
    await Contacto.findByIdAndDelete(req.params.id);
    res.json({message: 'Contacto Deleted'})
}

module.exports = contactoCtrl;