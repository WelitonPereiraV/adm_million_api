var express = require('express');
var router = express.Router();
//Incluindo o require do arquivo home_controller.js //
var HomeController = require('../app/controllers/home_controller'); // os (.. volta o diretorio ,e entra no app/entra no controllers e pega o home_controller)
var AdmController = require('../app/controllers/adm_controller'); // Aqui eu chamo a informacao da API 

/* GET home page. */ 
// EXPRESS ROUTER CRIA TODAS AS ROTAS QUE EU PRECISAR
router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index); 
//Nova rota criada para API chamada em: app/views/index.js, que vai se chamar AdmController e ter um index na pasta app/controllers

module.exports = router;
