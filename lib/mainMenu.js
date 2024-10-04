import inquirer from 'inquirer';

import createMarkdownFile from './createMarkdownFile.js';

async function mainMenu() {
  // Show an option to create a markdown file
  const answersObj = await inquirer.prompt({
    message: 'Please select an option',
    name: 'menuChoice',
    type: 'list',
    choices: ['Create Markdown File', 'Exit']
  });

  switch (answersObj.menuChoice) {
    case 'Create Markdown File':
      await createMarkdownFile();
      mainMenu();
      break;
    default:
      console.log('\nThanks for using the markdown generator!');
  }

  // Show an option to exit the application
}

export default mainMenu;