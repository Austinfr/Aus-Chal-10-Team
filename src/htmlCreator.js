const fs = require('fs');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');
const Intern = require('../lib/Intern');
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

    return `<div class="bg-primary text-white">\n<h2>${name}</h2>\n<p>${title}</p>\n</div>`;
}

//the lists are always in 3 thankfully
function createList(listItems){
    return `<ul class="list-group bg-secondary">\n<li class="list-group-item">${listItems[0]}</li>\n<li class="list-group-item">${listItems[1]}</li>\n<li class="list-group-item">${listItems[2]}</li>`;
}

//based on what type of employee it will format the text to match
function speciality(employee){
    if(employee instanceof Manager){
        return `Office number: ${employee.getOfficeNumber()}`;
    }
    if(employee instanceof Engineer){
        return `Github: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></li>`;
    }
    if(employee instanceof Intern){
        return `School: ${employee.getSchool()}`;
    }
}

function createCard(employee){
    //header
    let cardHeader = createHeader(employee.getName(), employee.getRole());
    //list contains id, email, officenumber
    let list = createList([
        `ID: ${employee.getId()}`,
        `Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>`,
        speciality(employee)
    ])

    return `<div class="${employee.getRole().toLowerCase()}-card">\n${cardHeader}\n${list}\n</div>`;

}

function createPage(name, data){
    //create the page header
    let pageHeader = `<header><h1>${name}</h1></header>`;

    let cardSection = `<div id=team-cards class="d-flex justify-content-center>\n`;

    //create a card for each item given
    for(let databit of data){

        //based off of what class it is
        cardSection += `${createCard(databit)}\n`;
    }

    cardSection += `</div>`;

    let head = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>`;

    let body = `<body>\n${pageHeader}\n${cardSection}\n</body>`

    let final = `${head}\n${body}\n</html>`;

    fs.writeFile('../dist/index.html', final, 'utf8' | 'w', (err) => {
        if(err){
            throw err;
        }else{
            console.log("File Written successfully");
        }
    })
}

module.exports = {
    createPage
}