#! /usr/bin/env node
const takePath = require('./../../src/js/extractLinks');
const path = require('path');
const colors = require('colors');



//operacion de esparcir

const [, , ...prop] = process.argv;

let absPath = prop[0]

if (!path.isAbsolute(absPath)) {
  console.log("Por favor, ubique la ruta correcta");
  mdlinks()
}

function mdlinks() {
  let absPathtry = process.cwd(absPath); // ubica la carpeta de directorio
  let concaPath = path.join(absPathtry, absPath);
  takePath(concaPath).then((values) => {
    values.forEach(element => {
      let linksContent = `Carpeta:${colors.green(element.file)} Link : ${colors.blue(element.href)} Titulo:${colors.yellow(element.title)} Status:${colors.red(element.status)} StatusOk:${colors.red(element.statusOk)}`
      console.log(linksContent)
    });

  }
  )
}
      //forEach((elemento, index)=>{})
   // }).catch((error) => {
  //    console.error("Error > " + error); 
  //  })

  //let options = {};
  //if (prop.includes('--validate')) options.validate = true;

