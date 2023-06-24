//GIVEN a command-line application that accepts user input
const inquirer = require ('inquirer');
const fs = require ('fs');

//WHEN I am prompted for text
  //THEN I can enter up to three characters
const promptUser = () =>{
  inquirer.prompt([{
name: 'text',
message: 'Please enter up to three chraracters for the logo text',
validate: (input) => {
  if (input.length > 3){
    return 'Please only enter up to three characters.';
  }
  return true;
 },
},
//WHEN I am prompted for the text color

{
name: 'textColor',
message: 'Please enter the color of your choosig, for the logo text (OR a hexadecimal number)', 
default: 'white',
},
{
  //THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  type:'list',
  name: 'shape',
  message: 'Please choose a shape for the logo:',
  choices: ['circle', 'triangle', 'square'],
},
])
}

//WHEN I am prompted for the shape's color
//THEN I can enter a color keyword (OR a hexadecimal number)
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered