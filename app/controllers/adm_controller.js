//Parte 2 VIDEO 4, fazendo os requires, para usar o ADM vindo da pasta MODEL
var Adm = require('../models/adm');

const AdmController = {
  index: (req, res, next) => {
    res.send(Adm.find()); // Adm.todos() esta chamando o metodo todos criado no arquivo adm.js
  }
  
}

module.exports = AdmController;
