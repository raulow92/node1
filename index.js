const { registrar, leer, eliminar } = require("./operaciones");
const args = process.argv.slice(2);
const operacion = args[0];
const nombre = args[1];
const edad = args[2];
const animal = args[3];
const color = args[4];
const enfermedad = args[5];

operacion === "registrar" && registrar(nombre, edad, animal, color, enfermedad)
operacion === "leer" && leer()
operacion === "eliminar" && eliminar()