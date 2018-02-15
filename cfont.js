const CFonts = require('cfonts');
var doggyNames = require('doggy-names')

var randomName = doggyNames.random();

console.log(doggyNames.sort())
CFonts.say(randomName, {
    font: 'block',        //define the font face 
    align: 'left',        //define text alignment 
    colors: ['white'],    //define all colors 
    background: 'Black',  //define the background color 
    letterSpacing: 1,     //define letter spacing 
    lineHeight: 1,        //define the line height 
    space: true,          //define if the output text should have empty lines on top and on the bottom 
    maxLength: '0'        //define how many character can be on one line 
});