const HomeController = { // Objeto Hash
  index: (req, res, next) => { // req = request ( perguntar ao HTTP) // res= response - responde ao 
    res.render('index', { title: 'Express' }); 
    // Estou respondendo que vou ler o arquivo index e mandando um titulo chamdo Express
    //Estou mandando uma variavel do meu controler, para minha View, chamada Express
  }
   /*
       //Outra forma de fazer a função javascript//

        index:(req, res, next) => {
        res.render('index', { title: 'Express' });
      }
  
  */   
}

module.exports = HomeController;  // Assim meu index passa a entender quando fizer o require
/*  Em index.js na parte:

router.get('/', HomeController.index);
router.get('/adm.json', AdmController.index);

*/
