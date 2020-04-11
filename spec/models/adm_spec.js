var Adm = require('../../app/models/adm');
describe('Modelo Adm', ()=> {  
    it('Deve retornar o modelo de Adm', () => {
        let adm = Adm;
        expect(adm !== undefined).toBe(true);
        expect(adm.id !== undefined).toBe(true);
        expect(adm.nome  !== undefined).toBe(true);
        //console.log("===================================="); quando quiser depurar e ver o comportamento de alguma coisa, isolar assim para ficar mais faciil de ver no Terminal
        expect(adm.todos() !== undefined).toBe(true);
        //console.log("===================================");
    });
  });