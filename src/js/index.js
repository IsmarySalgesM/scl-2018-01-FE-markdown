#! /usr/bin/env node
const takePath = require('./../../src/js/prueba');
const path = require('path');



//operacion de esparcir

const [, , ...prop] = process.argv;

let absPath = prop[0]


if (!path.isAbsolute(absPath)) {
  mdlinks()
}

function mdlinks() {
  let absPathtry = process.cwd(absPath); // ubica la carpeta de directorio
  let prueba = path.join(absPathtry, absPath);
      takePath(prueba).then((values)=>{
        console.log(values)
      })
}
      //forEach((elemento, index)=>{})
   // }).catch((error) => {
  //    console.error("Error > " + error); 
  //  })
  
  //let options = {};
  //if (prop.includes('--validate')) options.validate = true;

