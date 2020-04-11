// FAZENDO A CONEXAO
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/million', {useNewUrlParser: true, useUnifiedTopology: true});

//EXPORTANDO O MODULO PARA QUE O EXPRESS ENXERGUE e CONSIGA UTILIZAR EM OUTROS LOCAIS;
modulo.exports = mongoose;