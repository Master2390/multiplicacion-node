const fs = require('fs');
var colors = require('colors');
let data = "";

let listarTabla = (base, limite) => {
    console.log("================================".green);
    console.log(`Tabla de Multiplicar con Base ${base}`.green);
    console.log("================================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

let crearArchivo = (base, limite) => {
    console.log(limite);
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base ingresada no es un numero');
            return
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`Tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}