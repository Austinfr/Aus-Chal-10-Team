const inquirer = require('inquirer');
const htmlCreator = require('./src/htmlCreator');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
let teamName = '';
let teamData = [];

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
            //manager questions
            {
                type: 'input',
                name: 'name',
                message: 'What is this manager\'s name?',
                when: (answers) => answers.teamMember === "Manager"
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this manager\'s id?',
                when: (answers) => answers.teamMember === "Manager"
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this manager\'s email?',
                when: (answers) => answers.teamMember === "Manager"
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is this manager\'s office number?',
                when: (answers) => answers.teamMember === "Manager"
            },
            //engineer questions
            {
                type: 'input',
                name: 'name',
                message: 'What is this engineer\'s name?',
                when: (answers) => answers.teamMember === "Engineer"
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this engineer\'s id?',
                when: (answers) => answers.teamMember === "Engineer"
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this engineer\'s email?',
                when: (answers) => answers.teamMember === "Engineer"
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is this engineer\'s Github name?',
                when: (answers) => answers.teamMember === "Engineer"
            },
            //intern questions
            {
                type: 'input',
                name: 'name',
                message: 'What is this intern\'s name?',
                when: (answers) => answers.teamMember === "Intern"
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is this intern\'s id?',
                when: (answers) => answers.teamMember === "Intern"
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is this intern\'s email?',
                when: (answers) => answers.teamMember === "Intern"
            },
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
                message: 'Woul you like to add another team member?(y/n)'
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
                htmlCreator.createPage(teamName, teamData);
            }
        })
    }

    //asks about the team name first
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