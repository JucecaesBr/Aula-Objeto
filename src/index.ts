import {  transaction } from "./classes/Transaction";
import { BankAccount } from "./classes/bankConta";

const ba1= new BankAccount("Julio", "31321", 1)
const ba2= new BankAccount("Pedro", "31321")
const tr1 = new transaction(100, ba1.id, ba2.id)
console.log(tr1)