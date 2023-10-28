function randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  

class BankAccount {
    nome:string
    id: number
    senha:string
    private _saldo :number
    constructor(nomeFornecido: string, senhaFornecido:string,  idFornecido: number = randomIntFromInterval(1, 99999999)){
        this.nome =nomeFornecido
        this.id = idFornecido
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



export {BankAccount}