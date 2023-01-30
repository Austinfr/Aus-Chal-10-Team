const fs = require('fs');

function makeCSS(source, destination){
    fs.copyFile(source, destination, err => {
        if(err) throw err
    });
}

module.exports = {
    makeCSS
};