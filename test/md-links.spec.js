const sum = require('./../src/js/md-links').sum;

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

const pathAbsolute = require('./../src/js/md-links').pathAbsolute;
test('Se espera true, para ruta absoluta', () => {
  expect(pathAbsolute).toBeTruthy();
});

const pathRelative = require('./../src/js/md-links').pathRelative;
test('Se espera true, para ruta relativa', () => {
  expect(pathRelative).toBeTruthy();
});

const pathString = require('./../src/js/md-links').pathString;
test('Se espera true, para string', () => {
  expect(pathString).toBeTruthy();
});

const strArgs = require('./../src/js/md-links').strArgs;
test('Se espera true, ruta de usuario', () => {
  expect(strArgs).toBeTruthy();
});

const typeFile = require('./../src/js/md-links').typeFile;
test('Se espera true, para archivos md', () => {
  expect(typeFile).toBeTruthy();
});

const mdlinks = require('./../src/js/md-links').mdlinks;
test('Se espera ser una function', () => {
  expect(mdlinks).toBeTruthy();
});
