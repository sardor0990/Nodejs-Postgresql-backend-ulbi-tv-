const Router = require('express')
const router = new Router()
const postController = require('../controller/post.controller.js')

router.post('/post', postController.createPost)
router.get('/posts', postController.getPostsByUser)

module.exports = router