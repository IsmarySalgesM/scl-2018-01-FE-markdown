const sum = require('../test/md-links');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const pathAbsolute = require('../test/md-links').pathAbsolute;
test('Se espera true, para ruta absoluta', () => {
  expect(pathAbsolute).toBeTruthy();
});

const pathRelative = require('../test/md-links').pathRelative;
test('Se espera true, para ruta relativa', () => {
  expect(pathRelative).toBeTruthy();
});

const pathString = require('../test/md-links').pathString;
test('Se espera true, para string', () => {
  expect(pathString).toBeTruthy();
});

const strArgs = require('../test/md-links').strArgs;
test('Se espera true, ruta de usuario', () => {
  expect(strArgs).toBeTruthy();
});

const typeFile = require('../test/md-links').typeFile;
test('Se espera true, para archivos md', () => {
  expect(typeFile).toBeTruthy();
});

const mdlinks = require('../test/md-links').mdlinks;
test('Se espera ser una function', () => {
  expect(mdlinks).toBeTruthy();

const takePath = require('../test/md-links').takePath;
  test('Debería leer el archivo'), (done) => {
  takePath(fileFind, (error, result) => {
        expect(result).toBe(1);
        done();
    });
}
})


