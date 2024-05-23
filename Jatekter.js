import Lampa from "./Lampa.js";

export default class Jatekter{
    #lista=[];
    constructor(lista){
        this.#lista=lista;
        let szuloELem=$(".jatekter");
        //szuloElem kiüritése
        szuloELem.empty();
        this.#lista.forEach((element, i) => {
            new Lampa(element, i, szuloELem);
        });
        
    }
}