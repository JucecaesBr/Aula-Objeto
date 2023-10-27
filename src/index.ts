let cachorro ={
    nome:"King",
    idade:5,
    cor:"Beje",
    nomecachorro(){
        console.log("Au Au meu nome e "+this.nome)
    }
}


class BankAccount {
    nome:String
    id:String
    senha:String
    saldo = 0
    constructor(nomeFornecido: String, idFornecido:String,senhaFornecido:String){
        this.nome =nomeFornecido
        this.id=idFornecido
        this.senha=senhaFornecido
    }
    
}


const contaJulio = new BankAccount("Julio","123d","jucecaes",)
console.log(contaJulio)