export default class TTTModell{
// Előállítja a programnak az aktuális állapotát, adatokkal foglalkozik

    #LISTA=[" ", " ", " ", " ", " ", " ", " ", " ", " "]
    #lepes = 0;
    #aktElem 
    constructor(){
        this.#lepes = 0
        this.#setAktElem()
    }

    #setAktElem(){
        if(this.#lepes%2===0){
            this.#aktElem="X"
        }else{
            this.#aktElem="O"
        }
    }



    getList(){
        return this.#LISTA
    }

    lepteto(index){
        //lista indexedik elemére beírja az éppen aktuális elemet, megnöveli a lépést.
        this.#LISTA[index]=this.#aktElem
        this.#lepes++
        this.#setAktElem()
    }

    ell(){
        //kiszámolná, hogy ki győzött
    }

    
}