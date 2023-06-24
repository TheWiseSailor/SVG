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
message: 'Please enter the color of your choosing, for the logo text (OR a hexadecimal number)', 
default: 'white',
},
{
  //THEN I am presented with a list of shapes to choose from: circle, triangle, and square
  type:'list',
  name: 'shape',
  message: 'Please choose a shape for the logo:',
  choices: ['circle', 'triangle', 'square'],
},
//WHEN I am prompted for the shape's color
{
name: 'shapeColor',
message: 'Please enter the color for the desire shape of your choosing (keyword or hexadecimal):',
default: 'black',
}

//THEN I can enter a color keyword (OR a hexadecimal number)


])
.then((answers) => {
  const { text, textColor, shape, shapeColor} = answers;
  const svgTemplate = generateLogoSvg(text, textColor, shape, shapeColor);
  saveSvgToFile(svgTemplate);
})
.catch((error) =>{
  console.log('An error occured:', error);
});
//WHEN I have entered input for all the prompts
//THEN an SVG file is created named `logo.svg`
//AND the output text "Generated logo.svg" is printed in the command line
//WHEN I open the `logo.svg` file in a browser
//THEN I am shown a 300x200 pixel image that matches the criteria I entered
};
const generateLogoSvg = (text, textColor, shape, shapeColor) => {
  const svgTemplate = `
  <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="300" height="200" fill="${shapeColor}" />
  <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
  `;
  return svgTemplate;
};

const saveSvgToFile = (svgTemplate) => {
  fs.writeFile ('logo.svg', svgTemplate, (err) => {
    if (err){
      console.log ('Error while saving SVG file', err);
    }
  });
};

promptUser();


