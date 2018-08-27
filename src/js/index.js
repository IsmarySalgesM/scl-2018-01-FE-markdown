#! /usr/bin/env node

const path = require('path');
const fs = require('fs');

//operacion de esparcir
const [, , ...prop] = process.argv;

let absPath = prop[0];

if (!path.isAbsolute(absPath)) {
  let absPathtry = process.cwd(absPath); // ubica la carpeta de directorio
  let prueba = path.join(absPathtry, prop[0]); // une carpeta directorio con la busqueda del usuario
  //console.log(prueba);
  takePath(prueba);
}
 // buscamos el archivo 
function takePath(ruta) {
    fs.readFile(`${ruta}`, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
}

