import { promises as fs } from 'fs';
import inquirer from 'inquirer';

async function createMarkdownFile() {
  const answersObj = await inquirer.prompt([
    {
      message: 'What is your full name?',
      name: 'fullName'
    },
    {
      message: 'What is your phone number?',
      name: 'phoneNumber'
    },
    {
      message: 'What is your address?',
      name: 'address'
    },
    {
      message: 'What is your favorite food categories?',
      name: 'foodCategories',
      type: 'checkbox',
      choices: ['Italian', 'Portuguese', 'Mexican', 'Korean', 'Chinese', 'American']
    }
  ]);

  const favFoods = answersObj.foodCategories.map((foodStr) => {
    return `<p>${foodStr}</p>`
  });

  const info = `
  ## Full Name: ${answersObj.fullName}
  - Phone: ${answersObj.phoneNumber}
  - Address: ${answersObj.address}
  - Favorite Foods: 
  <details>
  ${favFoods.join('')}
  </details>
  `;

  await fs.writeFile('details.md', info);

  console.log('Markdown file generated successfully!\n-------');
}

export default createMarkdownFile;