#!/usr/bin/env node
//const path = require("path");
const fs = require('fs');
const [, , ...args] = process.argv;

//console.log(path);
//process.argv.forEach((val, index) => {
// console.log(`${index}: ${val}`);
//});
let prueba = fs.readFileSync("README.md");
console.log(prueba);

//fs.readFileSync();

//}
//}
//});

