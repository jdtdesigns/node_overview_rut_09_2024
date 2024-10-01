const fruits = ['orange', 'apple', 'grape'];
const fruits2 = ['kiwi', 'banana', 'strawberry'];
const fruits3 = ['pear', 'peach', 'watermelon'];

const combinedArray = [...fruits, 'dragon fruit', ...fruits3, ...fruits2];

// const concatCombined = fruits.concat(fruits2).concat(another).concat(oneMore);

const data = {
  name: 'JD',
  age: 44
};


const combinedData = {
  ...data,
  address: '555 coding dr',
  phone: '777-777-7777'
};


function printNames(...names) {
  for (const name of names) {
    console.log(name);
  }
}

// printNames('Bob', 'Jane', 'Frank', 'Jill', 'Billy');
printNames('Wilson', 'Harriet');