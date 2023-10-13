const categoriaCtrl = {};
const Categoria = require('../models/Categoria');

categoriaCtrl.getCategorias = async (req, res) => {
    const categorias = await Categoria.find();
    res.json(categorias)
}

categoriaCtrl.createCategoria = async (req, res) => {
    const {name} = req.body;
    const newCategoria = new Categoria({
        name: name,
    });
    await newCategoria.save();
    res.json({message: 'Categoria Saved'})
}

categoriaCtrl.getCategoria = async (req, res) =>{
    const categoria = await Categoria.findById(req.params.id);
    res.json(categoria);
}

categoriaCtrl.updateCategoria = async (req, res) =>{
    const {name} = req.body;
    await Categoria.findOneAndUpdate({_id: req.params.id}, {
        name
    });
    res.json({message: 'Categoria Updated'})
}

categoriaCtrl.deleteCategoria = async (req, res) =>{
    await Categoria.findByIdAndDelete(req.params.id);
    res.json({message: 'Categoria Deleted'})
}

module.exports = categoriaCtrl;