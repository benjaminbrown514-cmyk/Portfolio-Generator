const inquirer = require('inquirer');
const fs = require('fs'); 

const fileName = './Portfolio.html';

const questions = [
    {
        type: 'input',
        message: 'Please provide your name:',
        name: 'name',
    },
    {
        type: 'input',
        message: 'Please provide name of your GitHub repository:',
        name: 'repo',
    },
    {
        type: 'input',
        message: 'Please provide your location:',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Please provide the name of your linkedIn address:',
        name: 'LinkedIn',
    },
    {
        type: 'input',
        message: 'Please provide the name of your Biodata:',
        name: 'Biodata',
    }
    
    
]



async function generatePortfolio(){
    var answers = await inquirer.prompt(questions)
        
    
    console.log(answers)

    return answers

} 



//var html = ''
//fs.writeFile()










generatePortfolio()


