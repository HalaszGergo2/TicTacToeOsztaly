export default class Mezo {
  #ertek;
  #index;
  #szuloELEM;
  kattELEM;

  // egyetlen egy divet jelenít meg, tudja, hogy milyen jel kell bele, hogy ő hányadik.

  constructor(ertek, index, szuloELEM) {
    this.#ertek = ertek;
    this.#index = index;
    this.#szuloELEM = szuloELEM;
    
    console.log(this.kattELEM)
    this.#megjelenit();
    this.kattELEM = $(".card:last-child")
    if(this.#ertek === " "){
        this.#elemKatt()
    }
    
  }

  #megjelenit() {
    let txt = `
        <div class="card col-lg-4">
            <p>${this.#ertek}</p>
        </div>
        `;
    this.#szuloELEM.append(txt);
  }

  #elemKatt(){
    //megmondjuk hogy éppen melyik elemre kattintottunk.
    this.kattELEM.on("click", () =>{
        const kattEsemeny = new CustomEvent("katt", { detail:this.#index })
        window.dispatchEvent(kattEsemeny)
    })
  }
}
