# Portfolio-Generator
This README template is designed to be professional, clear, and employer-ready. It follows the standard structure for a Node.js project while highlighting the specific requirements of your Portfolio Generator assignment.

Portfolio Generator 📝
A command-line interface (CLI) application that simplifies the process of creating a professional web presence. By answering a series of prompts in the terminal, users can instantly generate a styled HTML portfolio page featuring their personal bio, location, and social professional links.

Table of Contents
Description

Installation

Usage

Technologies Used

License

Description
The Portfolio Generator was built to demonstrate the power of Node.js in automating file system tasks. Instead of manually coding an HTML file, this tool leverages the inquirer package to collect user data and dynamically injects that information into a template literal. The result is a clean, CSS-styled index.html file ready for deployment.

Key Features:

Interactive CLI prompts for user data (Name, Location, Bio, LinkedIn, GitHub).

Dynamic HTML generation using JavaScript template literals.

Automated file writing to the local directory.

Responsive CSS styling included in the generated output.

Installation
To run this application locally, ensure you have Node.js installed, then follow these steps:

Clone the repository:

Bash
git clone https://github.com/your-username/portfolio-generator.git
Navigate to the project directory:

url link:
(https://github.com/benjaminbrown514-cmyk/Portfolio-Generator) 
Bash
cd portfolio-generator
Install dependencies:
(Note: This project specifically uses Inquirer v8.2.4)

Bash
npm install
Usage
Open your terminal in the root directory of the project.

Run the application using the following command:

Bash
node index.js
Answer the prompts provided in the command line.

Once completed, a new index.html file will be created in your directory. Open this file in your browser to view your new portfolio!

Demo

[!IMPORTANT]
Insert a link to your walkthrough video or a GIF here!
Example: ![Application Walkthrough](./assets/demo-video.gif)

Technologies Used
Node.js: JavaScript runtime environment.

Inquirer (v8.2.4): For handling interactive command-line user interfaces.

File System (fs): Node.js module used to write the HTML file.

HTML5 & CSS3: For the structure and styling of the generated portfolio.

License
Distributed under the MIT License. See LICENSE for more information.
