const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("🐢 Tortuga - Cada Paso Cuenta");
console.log("");

rl.question("¿Cómo te llamas? ", (nombre) => {
    console.log("");
    console.log(`Hola, ${nombre}.`);
    console.log("🐢 Cada paso cuenta.");
    rl.close();
});