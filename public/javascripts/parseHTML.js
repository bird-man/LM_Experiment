/* jshint esversion 6 */

const http = require('http');
const xpath = require('xpath');
const domParser = require('xmldom').DOMParser;

http.get('http://uspl.lilly.com/humalog/humalog.html#pi', (resp) => {
    let page = '';

    resp.on('data', (chunk) => {
        page += chunk;
    });

    resp.on('end', () => {
        let document = new domParser().parseFromString(page);
        let text = xpath.select('/html[text()]', document);
        console.log(text);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});
