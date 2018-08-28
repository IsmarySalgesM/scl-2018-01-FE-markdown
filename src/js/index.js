#! /usr/bin/env node
const takePath = require('./../../src/js/prueba');
const path = require('path');



//operacion de esparcir

const [, , ...prop] = process.argv;

let absPath = prop[0]


if (!path.isAbsolute(absPath)) {
  let absPathtry = process.cwd(absPath); // ubica la carpeta de directorio
  let prueba = path.join(absPathtry, prop[0]); // une carpeta directorio con la busqueda del usuario
  let options = {};
  if (prop.includes('--validate')) options.validate = true;
  takePath(prueba);
}



