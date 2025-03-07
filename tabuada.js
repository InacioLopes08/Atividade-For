const prompt = require("prompt-sync")();
const n = +prompt("insira um numero: ");
for (let i = 1; i < 10; i++) {
    let mult = (n*i);
    console.log(`Numero ${n} x ${i} = ${mult}`);
}