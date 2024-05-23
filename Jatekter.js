import Lampa from "./Lampa.js";

export default class Jatekter{
    #lista=[];
    constructor(lista){
        this.#lista=lista;
        this.#lista.forEach((element, i) => {
            new Lampa(element, i, $(".jatekter"));
        });
    }
}