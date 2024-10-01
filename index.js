const data = {
  name: 'JD',
  age: 44,
  address: '555 coding dr',
  phone: '777-777-7777',
  info: {
    location: 'Atlanta',
    county: 'Cobb',
    places: ['Lake Acworth', 'Georgia Aquarium']
  }
};

const { age: userAge, address } = data;

console.log(userAge);

// function printData({ color, length }) {

//   console.log(length);
// }

// printData({
//   color: 'blue',
//   length: 10
// })


const fruits = ['orange', 'apple', 'kiwi'];

const [thatFruit, a, b] = fruits;

console.log(thatFruit);