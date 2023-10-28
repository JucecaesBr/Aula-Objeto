

class transaction{
    valor: number
    idDestinatario:number
    idRementete:number
    dataCriada = new Date();

    constructor(valorFornecido:number,idDestinatarioFornecido:number,idRemetenteFornecido:number){
        this.valor = valorFornecido;
        this.idDestinatario = idDestinatarioFornecido;
        this.idRementete = idRemetenteFornecido;
    }
}

export{transaction}