export default class Lampa {
    #allapot = false;
    #id;
    #szuloElem;
    #divElem;

    constructor(allapot, id, szuloELem, divElem) {
        this.#allapot = allapot;
        this.#id = id;
        this.#szuloElem = szuloELem;
        this.#divElem = divElem;
        this.#megjelenit();
        this.#divElem = this.#szuloElem.children("div:last-child");
        console.log(this.#divElem);
        this.#szinBeallit();

    }

    #szinBeallit() {
        //az elem állapotátol függően hozzáadja a .felkapcs clast ehhez a div elemhez
        if (this.#allapot) {
            this.#divElem.addClass("felkapcs");
        }
    }

    #kattintasTigger(esemenynev) {
        conste = new CustomEvent(esemenynev, { detail: this.#id })
        window.dispatchEvent(e)
    }


    #megjelenit() {
        let txt = `<div class="lampa">
            </div>        
        `
        this.#szuloElem.append(txt);
    }
}