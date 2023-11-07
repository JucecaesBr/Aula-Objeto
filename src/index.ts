import {  transaction } from "./classes/Transaction";
import { BankAccount } from "./classes/bankConta";
import { VideoGame,playStation } from "./classes/Heranca";
// const ba1= new BankAccount("Julio", "perna", 1)
// const ba2= new BankAccount("Pedro", "senha", 2)


// //criar funçao de transacao 
// function criarTransaçao(valores:number,idDestinatarioTr:number,idRemetendeTr:number){
//     const transacaoNova=new transaction(valores,idDestinatarioTr,idRemetendeTr)
//     return transacaoNova
// }


// console.log(criarTransaçao(5000,2,1))

const ps5 = new playStation("Miranha",10000,250)
console.log(ps5)