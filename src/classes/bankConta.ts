
let cachorro ={
    nome:"King",
    idade:5,
    cor:"Beje",
    nomecachorro(){
        console.log("Au Au meu nome e "+this.nome)
    }
}


class BankAccount {
    nome:string
    id:string
    senha:string
    private _saldo :number
    constructor(nomeFornecido: string, idFornecido:string,senhaFornecido:string){
        this.nome =nomeFornecido
        this.id=idFornecido
        this.senha=senhaFornecido
        this._saldo = 0
    }
    saque(v: number){
        if(this._saldo >=v){
            return(this._saldo-=v)
        }else{
            return"Erro,sem saldo suficiente"
        }
    }
    deposito(v:number){
        return(this._saldo+=v)
    }
}

const contaJulio = new BankAccount("Julio","123d","jucecaes",)


export {cachorro, contaJulio, BankAccount}