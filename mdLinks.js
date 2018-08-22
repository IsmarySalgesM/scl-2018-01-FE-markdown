//const Marked = require("marked");

// Función necesaria para extraer los links usando marked
// (tomada desde biblioteca del mismo nombre y modificada para el ejercicio)
// Recibe texto en markdown y retorna sus links en un arreglo
//function markdownLinkExtractor(prueba) {
  const links = [];

  const renderer = new Marked.Renderer();

  // Taken from https://github.com/markedjs/marked/issues/1279
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

  renderer.link = function(href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title
    });
  };
  renderer.image = function(href, title, text) {
    // Remove image size at the end, e.g. ' =20%x50'
    href = href.replace(/ =\d*%?x\d*%?$/, "");
    links.push({
      href: href,
      text: text,
      title: title
    });
  };
  Marked(prueba, { renderer: renderer });

  return links;
  console.log(links);
//}

//let pruebaLInks = prueba.forEach((val, index) => {
//  console.log(`${index}: ${val}`);
//});

//});

//let prueba = .forEach((val, index) => {

//  const links = require("links");
// links.readFile("./link.js");

//  console.log(`${index}: ${val}`);
//});
