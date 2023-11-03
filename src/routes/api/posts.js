const router = require('express').Router();

const PostsController = require('../../controllers/posts.controller');

router.get('/', PostsController.getAllPosts);
router.get('/:postId', PostsController.getPostById);
router.get('/autor/:autorId', PostsController.getPostsByAuthorId);
router.post('/', PostsController.createPost);

module.exports = router;