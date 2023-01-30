const inquirer = require('inquirer');
const htmlCreator = require('./src/htmlCreator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamName = '';
let teamData = [];
//dunno why these are needed but it works
//read more above createPage function in the htmlCreator.js file
let destination = './dist';
let cssSource = './src/sampleStyle.css';

//need to get some way to loop and store the data each time

function init() {

    //then we move onto the questions about the team
    const askTeamQuestions = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'teamMember',
                message: 'What kind of team member would you like to add?',
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: 'input',
                name: 'name',
                message: (answer) => `What is this ${answer.teamMember}'s name?`
            },
            {
                type: 'input',
                name: 'id',
                message: (answer) => `What is this ${answer.teamMember}'s id?`
            },
            {
                type: 'input',
                name: 'email',
                message: (answer) => `What is this ${answer.teamMember}'s email?`
            },
            //manager question
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is this manager\'s office number?',
                when: (answers) => answers.teamMember === "Manager"
            },
            //engineer question
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s Github name?',
                when: (answers) => answers.teamMember === "Engineer"
            },
            //intern question
            {
                type: 'input',
                name: 'school',
                message: 'What is this intern\'s school?',
                when: (answers) => answers.teamMember === "Intern"
            },
            //final question
            {
                type: 'confirm',
                name: 'addMore',
                message: 'Woul you like to add another team member?'
            }

        ]).then(data => {
            //stores the data using the helper classes
            switch(data.teamMember){
                case "Manager":
                    let tempManager = new Manager(data.name, data.id, data.email, data.officeNumber);
                    teamData.push(tempManager);
                    break;
                case "Engineer":
                    let tempEngineer = new Engineer(data.name, data.id, data.email, data.github);
                    teamData.push(tempEngineer);
                    break;
                case "Intern":
                    let tempIntern = new Intern(data.name, data.id, data.email, data.school);
                    teamData.push(tempIntern);
                    break;
            }

            //if we want to add another team member we store our current data and recurse
            if(data.addMore){
                askTeamQuestions();

            //for when we're done adding team members add the data and pass it to our html creator
            }else{
                htmlCreator.createPage(teamName, teamData, cssSource, destination);
            }
        })
    }

    //asks about the team name first since we only want to ask once
    //and I could've used nesting within the then but this is how it went
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
            message: 'What is your team name?'
        }
    ]).then(data => {
        teamName = data.teamName;
        askTeamQuestions();
    });
}
init();