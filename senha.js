const prompt = require("prompt-sync")();
const sCorreta = Math.floor(Math.random()*21);

let senha = +prompt ("Chute um número de 0 a 20: ");

while (senha !== sCorreta) {
    console.log("Errou! Burro pra Krai. Tente Novamente!!");
    senha = +prompt("Chute um número de 0 a 20: ");
}

console.log("Acertou!! Colando só pode :)");