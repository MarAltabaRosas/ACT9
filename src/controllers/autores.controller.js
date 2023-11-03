const AutoresModel = require('../models/autor.model')

//GET /api/autores   (Recupera todos los autores)

const getAllAutores = async (req, res) => {
    try{
        const [result] = await AutoresModel.selectAllAutores();
        res.json(result);
    } catch (error){
       res.json({fatal: error.message});
    }
}

//GET /api/autores/IDAUTOR    (Recupera 1 autor por ID)

const getAutorById = async (req, res) => {
    try{

        const {autorId} = req.params;
        const [autor] = await AutoresModel.selectAutorById(autorId);
        res.json(autor[0]);

    } catch (error){
       res.json({fatal: error.message});
    } 
}
//POST /api/autores           (Recibe body de petición los datos de un nuevo autor para insertarlo en la BD) 

const createAutor = async (req, res) => {
    try {
        const [result] = await AutoresModel.insertAutor(req.body);
        const [autor] = await AutoresModel.selectAutorById(result.insertId);
        res.json(autor[0]);
    } catch(error){
        res.json({fatal: error.message})
    }

}

module.exports = { getAllAutores, createAutor, getAutorById }