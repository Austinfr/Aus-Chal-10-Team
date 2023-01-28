const fs = require('fs');

let source = './sampleStyle.css';
let destination = '../dist/style.css';

module.exports = fs.copyFile(source, destination, (err) => {if(err) throw err});