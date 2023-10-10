const transporteCtrl = {};
const Transporte = require('../models/Transporte');

transporteCtrl.getTransportes = async (req, res) => {
    const transportes = await Transporte.find();
    res.json(transportes)
}

transporteCtrl.createTransporte = async (req, res) => {
    const {numeroUnidad, estado, idCentral} = req.body;
    const newTransporte = new Transporte({
        numeroUnidad: numeroUnidad,
        estado: estado,
        idCentral: idCentral
    });
    await newTransporte.save();
    res.json({message: 'Transporte Saved'})
}

transporteCtrl.getTransporte = async (req, res) =>{
    const transporte = await Transporte.findById(req.params.id);
    res.json(transporte);
}

transporteCtrl.updateTransporte = async (req, res) =>{
    const {numeroUnidad, estado, idCentral} = req.body;
    await Transporte.findOneAndUpdate({_id: req.params.id}, {
        numeroUnidad, estado, idCentral
    });
    res.json({message: 'Transporte Updated'})
}

transporteCtrl.deleteTransporte = async (req, res) =>{
    await Transporte.findByIdAndDelete(req.params.id);
    res.json({message: 'Transporte Deleted'})
}

module.exports = transporteCtrl;