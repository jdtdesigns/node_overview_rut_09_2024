const nums = [10, 3, 100, 70, 8, 55, 88];
const users = [
  {
    name: 'Bob',
    age: 99
  },
  {
    name: 'Jim',
    age: 25
  },
  {
    name: 'Sarah',
    age: 40
  }
];

const students = [
  {
    name: 'Roman',
    average: 99
  },
  {
    name: 'Matt',
    average: 80
  },
  {
    name: 'Izzy',
    average: 95
  },
  {
    name: 'Kandyce',
    average: 90
  }
]


const sum = nums.reduce((output, num) => {
  return output + num
}, 0);

// const overallAverage = students.reduce((output, studentObj, index, arr) => {
//   // If we are on the last student, return the output divided by the arr length
//   if (index === arr.length - 1) {
//     return (output + studentObj.average) / arr.length;
//   }

//   // Otherwise, return output + the studentObj's average
//   return output + studentObj.average;
// }, 0);

const studentInfo = students.reduce((output, studentObj, index, arr) => {
  output.overallAverage += studentObj.average;

  if (index === arr.length - 1) {
    output.overallAverage = output.overallAverage / arr.length;
  }

  return output;
}, {
  overallAverage: 0,
  studentCount: students.length
});

console.log(studentInfo);

// let total = 0;

// for (const studentObj of students) {
//   total += studentObj.average;
// }

// const overall = total / students.length;

// console.log(overall);



const evenArray = nums.map((num) => {
  if ((num % 2) === 0) {
    return `${num} is even`
  } else {
    return `${num} is odd`
  }
});





// nums.forEach((num, index) => {
//   console.log(index);
// });


// for (const num of nums) {
//   if (num > 10) {
//     break;
//   }

//   console.log(num);
// }






// Filtering out values/items
const filteredNums = nums.filter((num) => {
  if (num > 10) {
    return true;
  }
});

const filteredUsers = users.filter((userObj) => {
  if (userObj.age > 30) {
    return true;
  }
});












// Algorithm challenge - Write a function that orders the array numbers from lowest to highest
const sorted = nums.sort((currentNum, nextNum) => {
  return nextNum - currentNum;
});

// Create a variable that stores a sorted userArray. In your callback function, return the difference between the current object's age and the next object's age
const sortedUsers = users.sort((currentObj, nextObj) => {
  return currentObj.age - nextObj.age;
});

// Create a variable that stores the sorted users array and sorts the objects by name - hint (all letter characters have a number that you can pull with JS)



