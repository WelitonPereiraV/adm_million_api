var mongoose = require ('../../db/conexao'); // ../(volta um diretorio, sai de models), (../ - sai de app), entra na DB e vai no arquivo conexao" 

const Adm = mongoose.model('user', { 
  nome: { type: String, required: true }, // require quer dizer obrigatorio
  email: { type: String, required: true, unique: true }, //require e unico - obrigatorio e unico
  senha: { type: String, required: true },
});

module.exports = Adm;

// // ****************** Primeira parte criada no video****************//
// // Criei um Adm 
// // Criando uma Hash, estrutura de STRUCT
// const Adm = { 
//     id: 1,
//     nome: "Weliton",
//     password: "123456",
//     // Esse metodo todos, vai retornar um array basico de informacoes, para evitar de criar e configurar bando de dados,
//     // Foi criado para ver conceito de API
//     todos: ()=> [  // ESSE TODOS E UM METODO QUE ESTA SENDO CHAMADO NO ARQUIVO ADM_CONTROLLERS.JS
//         { 
//             id: 1,
//             nome: "Weliton",
//             password: "11111",
//         },
//         { 
//             id: 2,
//             nome: "Weliton2",
//             password: "22222",
//         }
//     ]   
// }

//   // Exportando o modulo ADM para que ele seja enxergado pelo express
//   module.exports = Adm;

  
  
  