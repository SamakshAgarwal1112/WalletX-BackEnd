const {Router} = require('express');
const router = Router();
const AuthController = require('../Controllers/Users');
const {verifyUser} = require('../MiddleWares/AuthMiddleWare');
router.get('/info', verifyUser, AuthController.fetch);
router.get('/info/:username', AuthController.search);
router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.logIn);
router.get('/logout', AuthController.logOut);

module.exports = router;