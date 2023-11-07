class VideoGame {
    marca:string
    constructor(nomeMarca:string){
        this.marca=nomeMarca
    }
}

class playStation extends VideoGame {
    jogo:string
    preco:number
    public ssd:number
    constructor(nomeJogo:string, valorPreco:number, ssdTamanho:number){
        super("Sony")
        this.jogo=nomeJogo
        this.preco=valorPreco
        this.ssd=ssdTamanho
        if(this.ssd===500 || this.ssd===1000){
            this.ssd=ssdTamanho
        }else{
            this.ssd=0

        }
       
    }
}
function creiarVideogame (){
    const videoGameNovo = new playStation ("Halo",6300,250)
    if(get ssdteste)
    
}

export{VideoGame,playStation}