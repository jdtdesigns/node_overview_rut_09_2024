const inquirer = require('inquirer');

const languages = [
  {
    id: 1,
    name: 'JS'
  },
  {
    id: 2,
    name: 'Python'
  }
];


const questionPromise = inquirer.prompt([
  {
    message: 'Please type your name',
    name: 'userName',
    type: 'input' // Text input box
  },
  {
    message: 'Please type your age',
    name: 'userAge',
    type: 'input',
    validate: function (value) {
      if (isNaN(value)) {
        return 'You must type a number value'
      }

      return true;
    }
  },
  {
    message: 'Please choose your favorite programming language',
    name: 'programmingLanguage',
    type: 'list', // Multi-choice list of values
    choices: languages.map((languageObj) => {
      return {
        name: languageObj.name,
        value: languageObj.id
      }
    })
  },
  {
    message: 'Please choose your software license',
    name: 'softwareLicense',
    type: 'list',
    choices: [
      {
        name: 'Academic Free License v3.0',
        value: 'https://img.shields.io/badge/AFL-3.0-green.svg'
      },
      {
        name: 'BSD 3-clause "New" or "Revised" license',
        value: 'https://img.shields.io/badge/BSD-3-Clause-green.svg'
      },
      {
        name: 'GNU General Public License v2.0',
        value: 'https://img.shields.io/badge/GPL-2.0-Clause-green.svg'
      }
    ]
  },
  {
    message: 'Please select your favorite food categories',
    name: 'foodCategory',
    type: 'checkbox', // Multi-selection list of choices
    choices: ['American', 'Chinese', 'Mexican', 'Korean', 'Italian']
  }
]);

questionPromise.then((answerObj) => {
  console.log(answerObj);
});