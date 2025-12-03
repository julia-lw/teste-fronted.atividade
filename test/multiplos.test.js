import { expect } from "chai";
import multiploDe3 from '../multiplo.js';
// utilizando o mocha
describe('Função múltiplo de 3',()=>{
    it('deve retornar true quando o número for múltiplo de 3',()=>{
        // utilizando o chai
        expect(multiploDe3(3)).to.be.true;
        expect(multiploDe3(6)).to.be.true;
        expect(multiploDe3(9)).to.be.true;
        expect(multiploDe3(12)).to.be.true;
        expect(multiploDe3(15)).to.be.true;
        expect(multiploDe3(27)).to.be.true;
        expect(multiploDe3(36)).to.be.true;
    });
    it('deve retornar true quando o número não for múltiplo de 3',()=>{
        // utilizando o chai
        expect(multiploDe3(4)).to.be.false;
        expect(multiploDe3(5)).to.be.false;
        expect(multiploDe3(8)).to.be.false;
        expect(multiploDe3(10)).to.be.false;
        expect(multiploDe3(14)).to.be.false;
        expect(multiploDe3(20)).to.be.false;
        expect(multiploDe3(22)).to.be.false;
    });
});