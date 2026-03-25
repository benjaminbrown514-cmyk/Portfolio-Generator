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
    },
    
    
]

function generatePortfolio(){
    inquirer 
        .prompt(questions)
        .then((answer) => { 
            retrieveAnswers(answer)
        })
    //var answers = await retrieveAnswers();
}

function retrieveAnswers(answers){
    
    var html =  '<!DOCTYPE html> <html lang="en"> <head> <link rel = "stylesheet" href="style.css"></head><body><header class = "header">Portfolio</header> <main> <div class = "header" id = "nameSection">Name: '+ answers.name + '</div><div class = "header" id = "locationSection">Location:' + answers.location +'</div><div class = "header" id = "biodataSection">Biodata: '+ answers.Biodata +'</div><div class = "header" id = "linkedinSection">Linkedin: ' + answers.LinkedIn + '</div><div class = "header" id = "githubSection">Github: ' + answers.repo + '</div></main></body> </html>'
     
    fs.writeFileSync(fileName, html)

    
    


} 


generatePortfolio()
















