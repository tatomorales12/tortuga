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
    console.log("");

    console.log("¿Qué quieres hacer?");
    console.log("1. Aprender programación");
    console.log("2. Ver mis opciones");
    console.log("3. Salir");

    rl.question("Elige una opción: ", (opcion) => {
        if (opcion === "1") {
            console.log("");
            console.log("🐢 ¡Genial! Vamos a aprender programación.");
            console.log("Hoy aprenderemos qué es una variable.");
        } else if (opcion === "2") {
            console.log("🐢 Estas son tus opciones.");
        } else if (opcion === "3") {
            console.log("🐢 Hasta pronto, Asdrúbal.");
        } else {
            console.log("🐢 No entiendo esa opción todavía.");
        }

        rl.close();
    });
});