var express = require('express');
var router = express.Router();
var FunkoController = require('../controllers/FunkoController');

router.get('/', function(req,res,next){
    FunkoController.getAll(req, res, next);
});

router.get('/:personaje', FunkoController.getOne);

router.post('/', function(req,res,next){
    FunkoController.save(req,res,next);
})

router.put('/:personaje', FunkoController.update);

router.delete('/:personaje', FunkoController.delete);

module.exports = router;