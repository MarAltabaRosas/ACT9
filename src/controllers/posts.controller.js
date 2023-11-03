
const PostsModel = require('../models/post.model')
const AutoresModel = require('../models/autor.model')

// GET /api/posts              (Recupera todos posts)
const getAllPosts = async (req, res) => {
    try{
        const [result] = await PostsModel.selectAllPosts();
        res.json(result);
    } catch (error){
       res.json({fatal: error.message});
    } 
}

// GET /api/posts/IDPOST       Recupera 1 post por ID (debe incluir todos los datos del post y todos los datos del autor)

const getPostById = async (req, res) => {
    try{
        const {postId} = req.params;
        const [post] = await PostsModel.selectPostById(postId);
        res.json(post[0]);

    } catch (error){
       res.json({fatal: error.message});
    } 
}


// GET /api/posts/autor/IDAUTOR  (Recupera todos los posts de un autor en concreto)

const getPostsByAuthorId = async (req, res) => {
    try{
        const {autorId} = req.params;
        const [post] = await PostsModel.selectPostsByAuthorId(autorId);
        res.json(post);

    } catch (error){
       res.json({fatal: error.message});
    } 
}

// POST /api/posts  (Recibe body de petición los datos de un nuevo post para insertarlo en la BD)

const createPost = async (req, res) => {
    try {
        const [result] = await PostsModel.insertPost(req.body);
        const [post] = await PostsModel.selectPostById(result.insertId);
        res.json(post[0]);
    } catch(error){
        res.json({fatal: error.message})
    }
}

module.exports = { getAllPosts, getPostById, getPostsByAuthorId, createPost }