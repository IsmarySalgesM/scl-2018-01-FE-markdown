const Marked = require('marked');
const fs = require('fs');
const fetch = require('node-fetch');


function takePath(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (error, data) => {
            if (error) {
                return reject(error);
            }
            let links = markdownLinkExtractor(data)
            let promises = []
            links.forEach(function (url) {
                promises.push(fetch(url.href)
               
                    .then(function (response) {
                         //console.log(response)
                         url.status = response.status;
                         url.statusOk = response.statusText
                        return url
                    })
                    .catch(function (err) {
                        url.status = "fail";
                        url.statusOk = "fail";
                        return url
                    }))
            });
            Promise.all(promises).then((values) => {
                resolve(links);
            }).catch((err) => {
            console.log(err);
            })

        });
    });
};



function markdownLinkExtractor(markdown) {
    const links = [];

    const renderer = new Marked.Renderer();
    const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;

    Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
    Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
    Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;

    renderer.link = function (href, text, title) {
        links.push({
            href: href,
            //  text: text,
            title: title,
        });
    };

    renderer.image = function (href, text, title) {
        // Remove image size at the end, e.g. ' =20%x50'
        href = href.replace(/ =\d*%?x\d*%?$/, '');
        links.push({
            href: href,
            //   text: text,
            title: title,
        });
    };

    Marked(markdown, { renderer: renderer });
    //   console.log(links);
    return links;
}

module.exports = takePath;