const centralCtrl = {};
const Central = require('../models/Central');

centralCtrl.getCentrales = async (req, res) => {
    const centrales = await Central.find();
    res.json(centrales)
}

centralCtrl.createCentral = async (req, res) => {
    const {name, longitud, latitud} = req.body;
    const newCentral = new Central({
        name: name,
        longitud: longitud,
        latitud: latitud
    });
    await newCentral.save();
    res.json({message: 'Central Saved'})
}

centralCtrl.getCentral = async (req, res) =>{
    const central = await Central.findById(req.params.id);
    res.json(central);
}

centralCtrl.updateCentral = async (req, res) =>{
    const {name, longitud, latitud} = req.body;
    await Central.findOneAndUpdate({_id: req.params.id}, {
        name, longitud, latitud
    });
    res.json({message: 'Central Updated'})
}

centralCtrl.deleteCentral = async (req, res) =>{
    await Central.findByIdAndDelete(req.params.id);
    res.json({message: 'Central Deleted'})
}

module.exports = centralCtrl;