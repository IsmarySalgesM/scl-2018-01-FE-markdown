// test de prueba
function sum(a, b) {
  return a + b;
}

// test ruta absoluta
function pathAbsolute(path) {
  if (path == '/foo/bar') {
  }
  return true;
}
// test ruta relativa
function pathRelative(paths) {
  if (paths !== '/foo/bar') {
  }
  return true;
}

// test para saber si es un string
function pathString(str) {
  if (typeof str === 'string') {
  }
  return true;
}
// test para entrar a un archivo de la terminal
function strArgs(terminal) {
  const [, , ...args] = process.argv;
  return terminal;
}
// test para saber si el archivo es .md 
function typeFile(files) {
  if (files == '.md') {
    return true;
  }
}
// se espera ser una function
function mdlinks() {
  mdlinks = mdlinks
}

// rutas para test 
module.exports = {
  sum: sum,
  pathAbsolute: pathAbsolute,
  typeFile: typeFile,
  pathRelative: pathRelative,
  pathString: pathString,
  strArgs: strArgs,
  mdlinks:mdlinks
};
