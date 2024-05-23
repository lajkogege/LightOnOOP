import Jatekter from "./Jatekter.js";

class Alapot {

    #lista = [false, false, false, true, true, true, false, false, false];
    constructor() {
        new Jatekter(this.#lista);

        $(window).on("kapcsolas", (event) => {
            //console.log(event.detail);
            let id = event.detail;
            //itt változtatjuk meg a program állapotát
            //ujra példányositom a jatekterek a modositott listámmal
            this.#szomszedokValtoztatasa(id);
            new Jatekter(this.#lista);


        });

    }

    #szomszedokValtoztatasa(id) {
        this.#lista[id] = !this.#lista[id];
        if (id % 3 !== 0) {
            this.#lista[id - 1] = !this.#lista[id - 1];
        }
        if (id % 3 !== 2) {
            this.#lista[id + 1] = !this.#lista[id + 1];
        }
        if (id > 2) {
            this.#lista[id - 3] = !this.#lista[id - 3];
        }
        if (id < 6) {
            this.#lista[id + 3] = !this.#lista[id + 3];
        }
    }

}
new Alapot();