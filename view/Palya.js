import  Mezo  from "./Mezo.js";

export default class Palya{
    #lista = [];
    #szuloELEM;

    //aktuális állapotot megjeleníti, a controllertől kapja az infókat. Annyi mezőt példányosít amennyire szüksége van.

    constructor(lista, szuloELEM){
        this.#lista = lista
        this.#szuloELEM = szuloELEM
        this.#szuloELEM.empty()
        this.palyaMegjelenit()
    }


    palyaMegjelenit(){
        this.#lista.forEach((elem, index) => {
            new Mezo(elem, index, this.#szuloELEM)
        });
    }
}