const {Router} = require('express');
const router = Router();
const AuthController = require('../Controllers/Users');
router.get('/info', AuthController.fetch);
router.get('/info/:username', AuthController.search);
router.post('/signup', AuthController.signUp);
module.exports = router;