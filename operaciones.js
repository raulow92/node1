const fs = require("fs");
const citasJSON = "./citas.json";

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = {
        nombre,
        edad,
        animal,
        color,
        enfermedad,
    };

    let citas = [];
    const data = fs.readFileSync(citasJSON, "utf8")
    citas = JSON.parse(data);

    citas.push(nuevaCita);
    const citasActualizadas = JSON.stringify(citas);

    fs.writeFileSync(citasJSON, citasActualizadas)
    console.log("Se registró una nueva cita!");
}

const leer = () => {
    const data = fs.readFileSync(citasJSON, "utf8")
    data == '[]' && console.log('No hay citas registradas!');
    let citas = JSON.parse(data);
    
    citas.forEach((cita, i) => {
        console.log("");
        console.log(`Cita ${i + 1}`);
        console.log(`Nombre: ${cita.nombre}`);
        console.log(`Edad: ${cita.edad}`);
        console.log(`Animal: ${cita.animal}`);
        console.log(`Color: ${cita.color}`);
        console.log(`Enfermedad: ${cita.enfermedad}`);
        console.log("");
        console.log("*******************************");
    });
}

const eliminar = () => {
    fs.writeFileSync(citasJSON, '[]')
    console.log("Se eliminaron todas las citas!");
}

module.exports = { registrar, leer, eliminar };
