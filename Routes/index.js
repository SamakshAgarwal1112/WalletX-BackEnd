const {Router} = require('express');
const router = Router();
const AuthController = require('../Controllers/Users');
const ItemController = require('../Controllers/Items');
const {verifyUser} = require('../MiddleWares/AuthMiddleWare');
//Authentication Routes
router.get('/info', verifyUser, AuthController.fetch);
router.get('/info/:username', AuthController.search);
router.post('/signup', AuthController.signUp);
router.post('/login', AuthController.logIn);
router.get('/logout', AuthController.logOut);
//Item Routes
router.post('/watchlist', ItemController.addToWatchList);
router.get('/watchlist', verifyUser, ItemController.fetchWatchList);
router.delete('/watchlist/:asset_id', ItemController.removeAsset);
module.exports = router;