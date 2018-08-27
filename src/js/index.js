#! /usr/bin/env node

const path = require('path');
const fs = require('fs');

//operacion de esparcir
const [, , ...prop] = process.argv;

let absPath = prop[0];

if (!path.isAbsolute(absPath)) {
  let absPathtry = process.cwd(absPath);
  let prueba = path.join(absPathtry, prop[0]);
  //console.log(prueba);
  takePath(prueba);
}

function takePath(ruta) {
    fs.readFile(`${ruta}`, 'utf-8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
}


