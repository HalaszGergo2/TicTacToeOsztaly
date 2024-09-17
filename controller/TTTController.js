import TTTModell from "../modell/TTTModel.js"
import Palya from "../view/Palya.js"

export default class TTTController{


    // példányosítja a modellt és a viewet
    //feliratkozik az eseménykezelőkre
    constructor(){
        this.jatekterELEM = $(".jatekter")
        this.tttModell=new TTTModell() 
        new Palya(this.tttModell.getList(), this.jatekterELEM)
        this.#esemenykezelo()
    }
    
    #esemenykezelo(){
        //itt hívja meg a modell/view megfelelő metódusait.
        $(window).on("katt", (event)=>{
            console.log(event.detail)
            this.tttModell.lepteto(event.detail)
            new Palya(this.tttModell.getList(),this.jatekterELEM)
        })
    }


}