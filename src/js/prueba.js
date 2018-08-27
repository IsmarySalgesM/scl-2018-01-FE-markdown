
//const fs = require('fs');
const path = require('path');
const prop = require('./index');


takePath = (ruta) => {
    let pruebaRuta = path.isAbsolute(ruta);
    console.log(pruebaRuta);
}