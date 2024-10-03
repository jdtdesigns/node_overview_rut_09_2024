const inquirer = require('inquirer');
const art = require('figlet');

const addName = require('./addName.js');
const spinWheel = require('./spinWheel.js');

let started = false;

function showMenu() {

  if (!started) {
    console.log(`
      ----------
      Welcome to the Random Name Wheel!
      ----------
    `);

    started = true;
  }

  const menuPromise = inquirer.prompt({
    message: 'Please choose an option',
    name: 'menuChoice', // This determines the answerObj's property that this answer will be stored to
    type: 'list',
    choices: ['Spin the wheel', 'Add a student', 'Exit']
  });

  menuPromise.then((answerObj) => {
    switch (answerObj.menuChoice) {
      case 'Add a student':
        addName(showMenu);
        break;
      case 'Spin the wheel':
        spinWheel(showMenu);
        break;
      default:
        art('Goodbye...', (err, rendered) => {
          console.log(rendered);
        });
    }
  });

}

module.exports = showMenu;