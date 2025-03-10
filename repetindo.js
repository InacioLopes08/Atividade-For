const prompt = require("prompt-sync")();
const n = +prompt("Quantas vezes você quer um olá? ")

for (let i = 1; i <= n; i++) {
    const i = "Olá";
    console.log(i);
}