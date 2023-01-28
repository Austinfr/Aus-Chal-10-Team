const fs = require('fs');
//makes the css just by requiring it
// const css = require('./cssCreator');


function createHeader(name, title){
    switch(title){
        case "Manager":
            title = "☕ " + title;
            break;
        case "Engineer":
            title = "👓 " + title;
            break;
        case "Intern":
            title = "🎓 " + title;
            break;
        default:
            throw new Error("You put something wrong");
    }

    return [`<h2>${name}</h2>`,`<p>${title}</p>`];
}

function createCard(data){
    let cardHeader = createHeader(data.name, data.title);
}

function createPage(data){
    //create the page header

    //create a card for each item given
    for(let databit of data){
        createCard(databit);
    }
}

// module.exports = createPage;